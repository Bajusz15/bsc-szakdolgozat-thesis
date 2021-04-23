package grpc

import (
	"context"
	"drone-delivery/drone-swarm/pkg/config"
	"drone-delivery/server/pkg/domain/models"
	"drone-delivery/server/pkg/network/inbound/grpc/protobuf"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/timestamppb"
)

//type Adapter interface {
//	SendTelemetryDataToServer(droneID int, t models.Telemetry) error
//}

type adapter struct {
	cc     *grpc.ClientConn
	tsc    protobuf.TelemetryServiceClient
	stream protobuf.TelemetryService_TelemetryStreamClient
}

func NewOutBoundAdapter() *adapter {
	var err error
	opts := grpc.WithInsecure()
	a := &adapter{}
	a.cc, err = grpc.Dial(config.ServerGRPCDomain+":"+config.ServerGRPCPort, opts)
	if err != nil {
		panic(err)
	}
	defer a.cc.Close()
	a.tsc = protobuf.NewTelemetryServiceClient(a.cc)
	a.stream, err = a.tsc.TelemetryStream(context.Background())
	return a
}

func (a *adapter) SendTelemetryDataToServer(t models.Telemetry) error {
	temps := make([]int32, len(t.MotorTemperatures))
	telemetryErrors := make([]int32, len(t.Errors))
	for i, val := range t.MotorTemperatures {
		temps[i] = int32(val)
	}
	for i, val := range t.Errors {
		telemetryErrors[i] = int32(val)
	}

	telemetryDataRequest := protobuf.TelemetryDataRequest{
		Telemetry: &protobuf.Telemetry{
			Speed: t.Speed,
			Location: &protobuf.GPS{
				Latitude:  t.Location.Latitude,
				Longitude: t.Location.Longitude,
			},
			Altitude:           t.Altitude,
			Bearing:            t.Bearing,
			Acceleration:       t.Acceleration,
			BatteryLevel:       int32(t.BatteryLevel),
			BatteryTemperature: int32(t.BatteryTemperature),
			MotorTemperatures:  temps,
			Errors:             telemetryErrors,
			TimeStamp:          timestamppb.New(t.TimeStamp),
			DroneId:            int32(t.DroneID),
		},
	}
	err := a.stream.Send(&telemetryDataRequest)
	return err
}

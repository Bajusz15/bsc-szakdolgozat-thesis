package warehouse

import (
	"drone-delivery/server/pkg/domain/models"
	goKitLog "github.com/go-kit/kit/log"
	"time"
)

type Service interface {
	ProvisionDrone(wh models.Warehouse, drone models.Drone) error
	StartDrone(d Drone) error
}

type Repository interface {
	SetDroneStateIfFree(droneID int, state string) error
}

type FlyingService interface {
	StartFlight(d Drone) error
}

type service struct {
	repo          Repository
	flyingService FlyingService
	logger        goKitLog.Logger
}

func (s *service) ProvisionDrone(wh models.Warehouse, d models.Drone) error {

	drone := Drone{
		ID:     d.ID,
		Parcel: d.Parcel,
		LastTelemetry: models.Telemetry{
			Speed:              0,
			Location:           wh.Location,
			BatteryLevel:       100,
			BatteryTemperature: 27,
			TimeStamp:          time.Now(),
		},
		Destinations: d.Destinations,
		Consumption:  d.Consumption,
	}
	//TODO: start the drone, with (route, parcel, etc) already defined by backend, then send back error or something
	err := s.StartDrone(drone)
	if err != nil {
		s.logger.Log("err", err, "desc", "failed to set drone state")
	}
	err = s.repo.SetDroneStateIfFree(drone.ID, "flying")
	if err != nil {
		s.logger.Log("err", err, "desc", "failed to set drone state")
	}
	return nil
}

func (s *service) StartDrone(d Drone) error {
	err := s.flyingService.StartFlight(d)
	//TODO: call flying service to start the flight, and set the LastTelemetry to the warehouse's coordinates
	return err
}

func NewService(r Repository, fl FlyingService, l goKitLog.Logger) *service {
	return &service{r, fl, l}
}

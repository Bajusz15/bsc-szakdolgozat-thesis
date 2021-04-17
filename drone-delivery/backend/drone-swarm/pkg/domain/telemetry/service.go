package telemetry

import (
	"drone-delivery/server/pkg/domain/models"
	goKitLog "github.com/go-kit/kit/log"
)

type Service interface {
	SendTelemetry(droneID int, t models.Telemetry) error
}

type OutboundAdapter interface {
	SendTelemetryDataToServer(droneID int, t models.Telemetry) error
}

type service struct {
	adapter OutboundAdapter
	logger  goKitLog.Logger
}

func (s service) SendTelemetry(droneID int, t models.Telemetry) error {
	err := s.adapter.SendTelemetryDataToServer(droneID, t)
	if err != nil {
		s.logger.Log("err", err, "desc", "outbound adapter returned with error")
		return err
	}
	return nil
}

func NewService(a OutboundAdapter, l goKitLog.Logger) *service {
	return &service{a, l}
}

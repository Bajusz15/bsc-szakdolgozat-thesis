package telemetry

import (
	"drone-delivery/server/pkg/domain/models"
)

type Service interface {
	SendTelemetry(telemetry models.Telemetry) error
}

type Repository interface {
}

type service struct {

}

func (s service) SendTelemetry() error {
	panic("implement me")
}

func NewService() Service {
	return &service{}
}

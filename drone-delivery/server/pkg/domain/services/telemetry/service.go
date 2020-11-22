package telemetry

import (
	"github.com/bajusz15/drone-delivery/server/pkg/domain/models"
	"github.com/go-kit/kit/log"
)

type Service interface {
	SaveTelemetry(id int, t models.Telemetry) error
	GetDroneTelemetry(id int) ([]models.Telemetry, error)
}

type Repository interface {
	InsertTelemetry(id int, t models.Telemetry) error
	GetTelemetry(droneID int) ([]models.Telemetry, error)
}

type service struct {
	repo   Repository
	logger log.Logger
}

func NewService(r Repository, l log.Logger) *service {
	return &service{repo: r, logger: l}
}

func (s *service) SaveTelemetry(droneID int, t models.Telemetry) error {
	return nil
}

func (s *service) GetDroneTelemetry(droneID int) ([]models.Telemetry, error) {
	return nil, nil
}

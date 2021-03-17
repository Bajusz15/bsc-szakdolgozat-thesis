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
	InsertTelemetry(droneID int, t models.Telemetry) error
	GetTelemetriesByDrone(droneID int) ([]models.Telemetry, error)
}

type service struct {
	repo   Repository
	logger log.Logger
}

func NewService(r Repository, l log.Logger) *service {
	return &service{repo: r, logger: l}
}

func (s *service) SaveTelemetry(droneID int, t models.Telemetry) error {
	var err error
	err = s.repo.InsertTelemetry(droneID, t)
	return err
}

func (s *service) GetDroneTelemetry(droneID int) ([]models.Telemetry, error) {
	telemetries, err := s.repo.GetTelemetriesByDrone(droneID)
	if err != nil {
		s.logger.Log("err", err, "desc", "failed to get drone telemetry")
		return nil, err
	}
	return telemetries, nil
}

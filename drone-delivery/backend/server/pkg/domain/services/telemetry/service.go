package telemetry

import (
	"drone-delivery/server/pkg/domain/models"
	"github.com/go-kit/kit/log"
)

type Service interface {
	SaveTelemetry(t models.Telemetry) error
	GetDroneTelemetry(droneID int) ([]models.Telemetry, error)
	ChangeService(r Repository)
}

type Repository interface {
	InsertTelemetry(t models.Telemetry) error
	GetTelemetriesByDrone(droneID int) ([]models.Telemetry, error)
}

type service struct {
	repo   Repository
	logger log.Logger
}

func NewService(r Repository, l log.Logger) *service {
	return &service{repo: r, logger: l}
}

func (s *service) ChangeService(r Repository) {
	s.repo = r
}

func (s *service) SaveTelemetry(t models.Telemetry) error {
	var err error
	//level.Info(s.logger).Log("desc", "saving telemetry", "telemetry", t)
	err = s.repo.InsertTelemetry(t)
	if err != nil {
		s.logger.Log("err", err, "desc", "failed to save drone telemetry")
		return err
	}
	return nil
}

func (s *service) GetDroneTelemetry(droneID int) ([]models.Telemetry, error) {
	telemetries, err := s.repo.GetTelemetriesByDrone(droneID)
	if err != nil {
		s.logger.Log("err", err, "desc", "failed to get drone telemetry")
		return nil, err
	}
	return telemetries, nil
}

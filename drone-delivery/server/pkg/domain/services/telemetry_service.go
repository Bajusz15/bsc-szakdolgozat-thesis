package services

import (
	"github.com/bajusz15/drone-delivery/server/pkg/domain/models"
)

type Service interface {
	SaveTelemetry(t models.Telemetry) error
}

type Repository interface {
}

type service struct {
	repo Repository
}

func NewService(r Repository) *service {
	return &service{repo: r}
}

func (s *service) SaveTelemetry(t models.Telemetry) error {
	return nil
}

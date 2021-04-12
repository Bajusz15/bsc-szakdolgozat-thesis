package drone

import (
	"drone-delivery/server/pkg/domain/models"
	"drone-delivery/server/pkg/domain/services/routing"
	"errors"
	"github.com/go-kit/kit/log"
	"github.com/go-kit/kit/log/level"
)

type Service interface {
	DeliverParcels() error
	ProvisionDrone(d models.Drone) error
	GetFreeDrones() ([]models.Drone, error)
	GetDronesDelivering() ([]models.Drone, error)
}

type Repository interface {
	GetFreeDrones() ([]models.Drone, error)
	GetParcelsInWarehouse() ([]models.Parcel, error)
	GetWarehouse() (models.Warehouse, error)
	GetDronesDelivering() ([]models.Drone, error)
}

type OutboundAdapter interface {
	FetchProvisionDroneEndpoint(d models.Drone) (success bool, err error)
	//GetDrones() ([]models.Drone, error)
}

type service struct {
	repo           Repository
	adapter        OutboundAdapter
	logger         log.Logger
	routingService routing.Service
}

func NewService(r Repository, ea OutboundAdapter, l log.Logger, rs routing.Service) Service {
	return &service{r, ea, l, rs}
}

func (s *service) DeliverParcels() error {
	wh, err := s.repo.GetWarehouse()
	if err != nil {
		s.logger.Log("desc", "could not get warehouse s from repository", "err", err)
		return err
	}

	parcels, err := s.repo.GetParcelsInWarehouse()
	if err != nil {
		s.logger.Log("err", err)
	}
	freeDrones, err := s.GetFreeDrones()
	if err != nil {
		s.logger.Log("desc", "could not get free drones from repository", "err", err)
		return err
	}

	drones := s.routingService.OptimizeRoutes(wh, freeDrones, parcels)

	for _, d := range drones {
		err = s.ProvisionDrone(d)
		if err != nil {
			s.logger.Log("desc", "could not provision drone")
			continue
		}
	}

	return err
}

func (s *service) ProvisionDrone(d models.Drone) error {
	logger := log.With(s.logger, "method", "ProvisionDrone")
	d.Parcel = p
	success, err := s.adapter.FetchProvisionDroneEndpoint(d)
	if err != nil {
		level.Warn(logger).Log(
			"description", "could not provision drone, outbound adapter returned an error",
			"err", err,
		)
	}
	if !success {
		return errors.New("could not start drone")
	}

	return nil
}

func (s *service) GetFreeDrones() ([]models.Drone, error) {
	logger := log.With(s.logger, "method", "GetFreeDrones")
	drones, err := s.repo.GetFreeDrones()
	if err != nil {
		level.Error(logger).Log(
			"desc", "could not get drones, outbound adapter returned an error",
			"err", err,
		)
	}
	return drones, nil
}

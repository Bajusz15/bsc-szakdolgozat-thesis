package drone

import (
	"errors"
	"github.com/bajusz15/drone-delivery/server/pkg/domain/models"
	"github.com/go-kit/kit/log"
	"github.com/go-kit/kit/log/level"
)

type Service interface {
	ProvisionAllDrones() error
	ProvisionDrone(d models.Drone, p models.Parcel) error // azert nem id-t adok át hanem magat a dron modellt mert kesobb lehet hozza rakni tobb logikat is, pl akkumlatorido vagy suly kapacitast is fog nezni.
	GetFreeDrones() ([]models.Drone, error)
}

type Repository interface {
	GetFreeDrones() ([]models.Drone, error)
	GetParcelsInWarehouse() ([]models.Parcel, error)
}

//Tehat ha az uzleti logika azt igenyli, hogy kulso hivast inditsunk valami kliensnek, de egy másik szerviz van rá
//Pl szól a kliensnek hogy indítson egy drónt
type OutboundAdapter interface {
	FetchStartDroneEndpoint(droneID int, trackingID int) (success bool, err error)
}

type service struct {
	repo   Repository
	ea     OutboundAdapter
	logger log.Logger
}

func NewService(r Repository, ea OutboundAdapter, l log.Logger) Service {
	return &service{r, ea, l}
}

func (s *service) ProvisionAllDrones() error {
	parcels, err := s.repo.GetParcelsInWarehouse()
	if err != nil {
		s.logger.Log("err", err)
	}
	drones, err := s.GetFreeDrones()
	if err != nil {
		s.logger.Log("desc", "could not get free drones from repository", "err", err)
		return err
	}
	for _, p := range parcels {
		for _, d := range drones {
			err = s.ProvisionDrone(d, p)
			if err != nil {
				continue
			}
		}
	}
	return err
}

func (s *service) ProvisionDrone(d models.Drone, p models.Parcel) error {
	logger := log.With(s.logger, "method", "ProvisionDrone")
	success, err := s.ea.FetchStartDroneEndpoint(d.ID, p.TrackingID)
	if err != nil {
		level.Warn(logger).Log(
			"description", "could not provision drone, outbound adapter returned an error while fetching",
			"err", err,
		)
	}
	if !success {
		return errors.New("could not start drone")
	}
	return nil
}

func (s *service) GetFreeDrones() ([]models.Drone, error) {
	return []models.Drone{}, nil
}

package warehouse

import "drone-delivery/server/pkg/domain/models"

type Service interface {
	ProvisionDrone(drone models.Drone) error
	StartDrone() error
}

type Repository interface {
	SetDroneState() error
	GetDrones() ()
}

type service struct {
	repo Repository
}

func (s *service) ProvisionDrone() error {
	panic("implement me")
	//TODO: start the drone, with (route, parcel, etc) already defined by backend, then send back error or something
	//also set the drone state, that now it's being provisioned
	//So, we make a new instance of the drone, it will be a function (that's the easiest for this simulation)
}

func (s *service) StartDrone() error {
	//TODO: call flying service to start the flight, and set the LastTelemetry to the warehouse's coordinates
	panic("implement me")
}

func NewService(r Repository) Service {
	return &service{r}
}

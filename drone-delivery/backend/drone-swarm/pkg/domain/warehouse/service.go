package warehouse

type Service interface {
	ProvisionDrone() error
	StartDrone() error
}

type Repository interface {
	SetDroneState() error
}

type service struct {
	repo Repository
}

func (s *service) ProvisionDrone() error {
	panic("implement me")
	//TODO: start the drone, pass the data (route, parcel, etc) to it, then send back error or something
	//So, we make a new instance of the drone, it will be a function (that's the easiest for this simulation)
}

func (s *service) StartDrone() error {
	//TODO: call flying service to start the flight
	panic("implement me")
}

func NewService(r Repository) Service {
	return &service{r}
}

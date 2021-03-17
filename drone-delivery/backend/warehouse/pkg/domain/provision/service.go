package provision

//todo: create a process of a drone program

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
	//TODO: make a new instance of the drone program with an id so we know which program it is.
	panic("implement me")
}

func NewService(r Repository) Service {
	return &service{r}
}

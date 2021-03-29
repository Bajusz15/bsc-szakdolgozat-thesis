package telemetry

type Service interface {
	SendTelemetry() error
}

type Repository interface {
}

type service struct {
	repo Repository
}

func (s service) SendTelemetry() error {
	panic("implement me")
}

func NewService(r Repository) Service {
	return &service{r}
}

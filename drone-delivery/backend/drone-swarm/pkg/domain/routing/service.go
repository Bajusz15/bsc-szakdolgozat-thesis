package routing

type Service interface {
	UpdateRoute() error
}

type Repository interface {
}

type service struct {
	repo Repository
}

func NewService(r Repository) Service {
	return &service{r}
}

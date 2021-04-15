package models

type Warehouse struct {
	ID       int `json:"id" db:"id"`
	Location GPS `json:"location"`
}

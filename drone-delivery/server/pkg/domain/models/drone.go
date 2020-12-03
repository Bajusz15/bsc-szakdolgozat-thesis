package models

type Drone struct {
	ID        int `json:"id" db:"id"`
	Telemetry `json:"telemetry"`
	Parcel    `json:"parcel"`
}

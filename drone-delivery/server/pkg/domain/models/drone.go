package models

type Drone struct {
	ID        int
	Telemetry `json:"telemetry"`
	Parcel    `json:"parcel"`
}

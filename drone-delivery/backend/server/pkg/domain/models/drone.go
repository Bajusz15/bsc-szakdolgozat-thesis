package models

type Drone struct {
	ID           int `json:"id" db:"drone_id"`
	Telemetry    `json:"telemetry"`
	Parcel       `json:"parcel"`
	Destinations []Destination `json:"destinations"`
	Consumption  float64       `json:"consumption" db:"consumption"` // electricity used for the drone to travel 1 km with X parcel weight with speed of 10 m/s
	Weight       float64       `json:"weight" db:"weight"`
}

func (d Drone) GetConsumption(p Parcel) float64 {
	//most csak 1 csomagot szallit 1 dron, de kesobb akar tobbet is lehet
	if p.Weight == 0 {
		return d.Consumption
	}
	//TODO: ennek biztos van jobb képlete, utána kell nézni
	return p.Weight*120 + d.Consumption
}

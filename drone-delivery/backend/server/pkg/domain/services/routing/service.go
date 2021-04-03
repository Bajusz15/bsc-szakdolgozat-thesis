package routing

import (
	"math"
)

//fmt.Printf("%f Kilometers\n", CalculateDistance(32.9697, -96.80322, 29.46786, -98.53506, "K"))
// units: "M", or the default is miles. "K" is for kilometres. "N" is for Nautical miles.
type Service interface {
	CalculateDistance(lat1 float64, lng1 float64, lat2 float64, lng2 float64, unit ...string) float64
}

type service struct {
}

func NewService() *service {
	return &service{}
}

func (s *service) CalculateDistance(lat1, lng1, lat2, lng2 float64, unit ...string) float64 {
	const PI float64 = float64(math.Pi) //3.141592653589793

	radlat1 := float64(PI * lat1 / 180)
	radlat2 := float64(PI * lat2 / 180)

	theta := float64(lng1 - lng2)
	radtheta := float64(PI * theta / 180)

	dist := math.Sin(radlat1)*math.Sin(radlat2) + math.Cos(radlat1)*math.Cos(radlat2)*math.Cos(radtheta)

	if dist > 1 {
		dist = 1
	}

	dist = math.Acos(dist)
	dist = dist * 180 / PI
	dist = dist * 60 * 1.1515

	if len(unit) > 0 {
		if unit[0] == "K" {
			dist = dist * 1.609344
		} else if unit[0] == "N" {
			dist = dist * 0.8684
		}
	}

	return dist
}

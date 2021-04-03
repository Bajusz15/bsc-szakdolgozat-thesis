package flying

import (
	"drone-delivery/drone-swarm/pkg/domain/routing"
	"drone-delivery/drone-swarm/pkg/domain/telemetry"
	"drone-delivery/drone-swarm/pkg/domain/warehouse"
	"drone-delivery/server/pkg/domain/models"
	goKitLog "github.com/go-kit/kit/log"
	"log"
	"time"
)

type Service interface {
	StartFlight(d warehouse.Drone) error
}

type Repository interface {
}

type service struct {
	//repo   Repository
	ts     telemetry.Service
	rs     routing.Service
	logger goKitLog.Logger
}

func NewService(ts telemetry.Service, rs routing.Service, l goKitLog.Logger) Service {
	return &service{ts, rs, l}
}

func (s *service) StartFlight(d warehouse.Drone) error {
	
	//TODO: ezt szakdolgozatba esetleg bele lehet irni mint erdekesseg
	//azert lett ez a ticker megoldas valasztva, mert Go-ban ez biztos hogy nem okoz anomaliakat a szimulaciohoz
	//pl. egy lassu gepen, ha elakadt a folyamat es nem az eredeti ido volt a kesleltetes, akkor a
	//kovetkezo kesleltetest is eltolja. És at lehet allitani, a szakdolgozatban pedig az lett irva hogy
	//a halozat savszelessegetol fuggoen valtozik a gyakoriság.
	//Ha regebbi a Go verzio mint 1.14, akkor nincs ticker.Reset() és range helyett for-select kell és reassign (ticker = time.NewTicker()... ),
	//mert a range cacheli a loopolando valtozot, esetunkben a ticker.C-t es data race lephet fel
	//TODO: continously send data to the server through the adapters
	ticker := time.NewTicker(time.Duration(200) * time.Millisecond)
	go func(drone *warehouse.Drone) {
		for range ticker.C {
			i := 0
			for destination :=drone.Destinations[i];  i < len(drone.Destinations) && drone.LastTelemetry.Location != destination.Coordinates; {
				//TODO: fly until it reaches destination, then if it's a ParcelDestination, drop off that parcel
				distance, bearing := s.rs.CalculateDroneDistanceAndDirectionFromDestination(drone.LastTelemetry.Location.Latitude, drone.LastTelemetry.Location.Longitude,
					destination.Coordinates.Latitude, destination.Coordinates.Longitude)
				t := models.Telemetry{
					Speed:              0,
					Location:           models.GPS{},
					Altitude:           50,
					Bearing:   bearing,
					Acceleration:       0,
					BatteryLevel:       0,
					BatteryTemperature: 0,
					MotorTemperatures:  nil,
					Errors:             nil,
					TimeStamp:          time.Now(),
				}

				if distance < 400 && t.Speed > 2 {
					t.Speed -= 0.1
				} else if distance < 12{
					t.Speed = 0.2
					if distance < 1 {
						//TODO: drop the package, set drone coordinates equal to parcel drop off site, and move to next destination
						t.Location = drone.Destinations[i].Coordinates
						i++
					}
				}

				drone.LastTelemetry = t
				err := s.ts.SendTelemetry(t)
				if err != nil {
					s.logger.Log("err", err, "desc", "failed to send telemetry data")
				}

			}
			//ticker.Reset(time.Duration(500) * time.Millisecond)

			//if done, call ticker.Stop()
		}
		log.Println("stopped")
	}(&d)
	//main logic of flying return
	return nil
}

//Régi
//ticker := time.NewTicker(200 * time.Microsecond)
//quit := make(chan struct{})
//go func() {
//	for {
//		select {
//		case <- ticker.C:
//			// do stuff
//			ticker = time.NewTicker(500 * time.Microsecond)
//			//if done, quit the channel
//			//close(quit)
//		case <- quit:
//			ticker.Stop()
//			return
//		}
//	}
//}()

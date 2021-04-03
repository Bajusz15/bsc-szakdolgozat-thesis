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
	go func() {
		for range ticker.C {
			ticker.Reset(time.Duration(500) * time.Millisecond)
			err := s.ts.SendTelemetry()
			if err != nil {
				s.logger.Log("err", err, "desc", "failed to send telemetry data")
			}
			//if done, call ticker.Stop()
		}
		log.Println("stopped")
	}()
	//main logic of flying

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

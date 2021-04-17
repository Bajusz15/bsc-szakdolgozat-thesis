package routing

import (
	"drone-delivery/server/pkg/domain/models"
	"fmt"
	goKitLog "github.com/go-kit/kit/log"
	"github.com/go-kit/kit/log/level"
	"github.com/stretchr/testify/assert"
	"os"
	"testing"
)

func TestOptimizeRoutes(t *testing.T) {
	d1, d2, d3, d4 := models.Drone{
		ID:          1,
		Telemetry:   models.Telemetry{},
		Parcel:      models.Parcel{},
		Consumption: 800,
	}, models.Drone{
		ID:          2,
		Telemetry:   models.Telemetry{},
		Parcel:      models.Parcel{},
		Consumption: 700,
	}, models.Drone{
		ID:          3,
		Telemetry:   models.Telemetry{},
		Parcel:      models.Parcel{},
		Consumption: 650,
	}, models.Drone{
		ID:          4,
		Telemetry:   models.Telemetry{},
		Parcel:      models.Parcel{},
		Consumption: 390,
	}

	p1, p2, p3, p4 := models.Parcel{
		ID:     1,
		Weight: 0,
		DropOffSite: models.GPS{
			Latitude:  48.0745806,
			Longitude: 20.7696448,
		},
	}, models.Parcel{
		ID:     2,
		Weight: 0,
		DropOffSite: models.GPS{
			Latitude:  48.0736485,
			Longitude: 20.7791302,
		},
	}, models.Parcel{
		ID:     3,
		Weight: 0,
		DropOffSite: models.GPS{
			Latitude:  48.0637455,
			Longitude: 20.7497039,
		},
	}, models.Parcel{
		ID:     4,
		Weight: 0,
		DropOffSite: models.GPS{
			Latitude:  48.066926,
			Longitude: 20.7528756,
		},
	}

	var wh = models.Warehouse{Location: models.GPS{
		Latitude:  48.080922,
		Longitude: 20.766208,
	}}
	drones := []models.Drone{
		d1, d2, d3, d4,
	}
	parcels := []models.Parcel{
		p1, p2, p3, p4,
	}
	var logger goKitLog.Logger
	logger = goKitLog.NewLogfmtLogger(os.Stderr)
	logger = level.NewFilter(logger, level.AllowInfo()) // <--
	logger = goKitLog.With(logger, "ts", goKitLog.DefaultTimestampUTC)
	s := NewService(logger)
	//fmt.Printf("distance is %v km", s.CalculateDistance(wh.Location.Latitude, wh.Location.Longitude, p1.DropOffSite.Latitude, p1.DropOffSite.Longitude))
	//fmt.Printf("distance is %v km", s.CalculateDistance(wh.Location.Latitude, wh.Location.Longitude, p2.DropOffSite.Latitude, p2.DropOffSite.Longitude))
	//fmt.Printf("distance is %v km", s.CalculateDistance(wh.Location.Latitude, wh.Location.Longitude, p3.DropOffSite.Latitude, p3.DropOffSite.Longitude))
	//fmt.Printf("distance is %v km", s.CalculateDistance(wh.Location.Latitude, wh.Location.Longitude, p4.DropOffSite.Latitude, p4.DropOffSite.Longitude))
	//cost = distance * consumption
	dronesWithRoutes, err := s.OptimizeRoutes(wh, drones, parcels)
	if err != nil {
		s.logger.Log("desc", "failed to set routes for drones")
	}
	//after solving the assigment problem, these are the original costs, with the solution marked with \
	//\373	 326	303		182
	//623 	\545	506		304
	//1,128	987		916		\550
	//916   802		\745	447
	//The optimal value equals 2213.
	//http://www.hungarianalgorithm.com/solve.php?c=373-326-303-182--623-545-506-304--1128-987-916-550--916-802-745-447&random=1

	assert.Equal(t, 1, dronesWithRoutes[0].Parcel.ID)
	assert.Equal(t, 2, drones[1].Parcel.ID)
	assert.Equal(t, 4, dronesWithRoutes[2].Parcel.ID)
	assert.Equal(t, 3, dronesWithRoutes[3].Parcel.ID)

}

func TestCalculateDistance(t *testing.T) {
	var logger goKitLog.Logger
	logger = goKitLog.NewLogfmtLogger(os.Stderr)
	logger = level.NewFilter(logger, level.AllowInfo()) // <--
	logger = goKitLog.With(logger, "ts", goKitLog.DefaultTimestampUTC)
	s := NewService(logger)
	dist := s.CalculateDistance(48.080922, 20.766208, 48.0736485, 20.7791302)
	fmt.Printf("distance is %v km", dist)
}

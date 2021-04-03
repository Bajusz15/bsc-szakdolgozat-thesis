package main

import (
	"drone-delivery/drone-swarm/pkg/domain/flying"
	"drone-delivery/drone-swarm/pkg/domain/routing"
	"drone-delivery/drone-swarm/pkg/domain/telemetry"
	"drone-delivery/drone-swarm/pkg/network/inbound/http/rest"
	"fmt"
	"github.com/StefanSchroeder/Golang-Ellipsoid/ellipsoid"
	goKitLog "github.com/go-kit/kit/log"
	"github.com/go-kit/kit/log/level"
	"log"
	"net/http"
	"os"
)

func main() {
	fmt.Println("ez a raktár a szimulacioban, a raktár és drónok példányait szimulálja.")
	var logger goKitLog.Logger
	logger = goKitLog.NewLogfmtLogger(os.Stderr)
	logger = level.NewFilter(logger, level.AllowInfo()) // <--
	logger = goKitLog.With(logger, "ts", goKitLog.DefaultTimestampUTC)

	telemetryService := telemetry.NewService()
	geo := ellipsoid.Init("WGS84", ellipsoid.Degrees, ellipsoid.Meter, ellipsoid.LongitudeIsSymmetric, ellipsoid.BearingIsSymmetric)
	routingService := routing.NewService(geo)
	flying.NewService(telemetryService, routingService, logger)
	log.Fatal(http.ListenAndServe(":2000", rest.Handler()))
}

//ez csak egy sima kliens (drón a szimulacioban), ami megkapja a celt es ez alapjan fog az utvonal alatt mindenfele adatokat generalni es kuldeni magarol.
//Viszonylag buta, par dolgot kell jol csinalnia, az adatokat gyorsan es minimalis eroforras felhasznalasaval küldje a szervernek.

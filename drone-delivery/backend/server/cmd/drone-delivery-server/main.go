package main

import (
	"drone-delivery/server/pkg/config"
	"drone-delivery/server/pkg/domain/services/drone"
	"drone-delivery/server/pkg/domain/services/telemetry"
	"drone-delivery/server/pkg/network/inbound/http/rest"
	"drone-delivery/server/pkg/network/outbound"
	"drone-delivery/server/pkg/storage/postgres"
	"fmt"
	goKitLog "github.com/go-kit/kit/log"
	"github.com/go-kit/kit/log/level"
	"log"
	"net/http"
	"os"
)

func main() {
	fmt.Println("ez lesz a szerver, az adatközpont a szimulációban")
	var err error
	config.SetConfig()
	//logger
	var logger goKitLog.Logger
	logger = goKitLog.NewLogfmtLogger(os.Stderr)
	logger = level.NewFilter(logger, level.AllowInfo()) // <--
	logger = goKitLog.With(logger, "ts", goKitLog.DefaultTimestampUTC)

	//storage
	storage, err := postgres.NewStorage(config.PostgresConfig)
	if err != nil {
		log.Println("Error connecting to database")
		panic(err)
	}
	//outbound adapters
	jsonAdapter := outbound.NewJSONAdapter()

	//services
	var ts telemetry.Service
	var ds drone.Service
	ts = telemetry.NewService(storage, logger)
	ds = drone.NewService(storage, jsonAdapter, logger)

	router := rest.Handler(ds, ts)
	log.Fatal(http.ListenAndServe(":5000", router))
}

// go-kit lesz használva, mint  mikro-szerviz strukturat tamogato könyvtár
// a szerveren futo appliakcio hexagonal architekturaba lesz irva, illetve a DDD eleimei is megjelennek. Ezzel  a go-kit tokeletesen hasznalhato

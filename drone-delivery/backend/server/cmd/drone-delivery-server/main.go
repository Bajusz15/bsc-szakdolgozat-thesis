package main

import (
	"drone-delivery/server/pkg/config"
	"drone-delivery/server/pkg/domain/services/drone"
	"drone-delivery/server/pkg/domain/services/routing"
	"drone-delivery/server/pkg/domain/services/telemetry"
	grpcInbound "drone-delivery/server/pkg/network/inbound/grpc"
	"drone-delivery/server/pkg/network/inbound/grpc/protobuf"
	"drone-delivery/server/pkg/network/inbound/http/rest"
	"drone-delivery/server/pkg/network/outbound"
	"drone-delivery/server/pkg/storage/mongodb"
	"drone-delivery/server/pkg/storage/postgres"
	"fmt"
	goKitLog "github.com/go-kit/kit/log"
	"github.com/go-kit/kit/log/level"
	"google.golang.org/grpc"
	"log"
	"net"
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
	postgresStorage, err := postgres.NewStorage(config.PostgresConfig)
	if err != nil {
		log.Println("Error connecting to database")
		panic(err)
	}
	mongoStorage, err := mongodb.NewStorage(config.MongoConfig)
	if err != nil {
		log.Println("Error connecting to database")
		panic(err)
	}
	//outbound adapters
	jsonAdapter := outbound.NewJSONAdapter()

	//services
	var ts telemetry.Service
	var ds drone.Service
	var rs routing.Service
	ts = telemetry.NewService(postgresStorage, logger)
	rs = routing.NewService(logger)
	ds = drone.NewService(postgresStorage, jsonAdapter, logger, rs)
	//REST API
	router := rest.Handler(ds, ts, postgresStorage, mongoStorage)
	go log.Fatal(http.ListenAndServe(":5000", router))

	//gRPC
	listener, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatal("Error creating to tcp listener")
	}
	var options []grpc.ServerOption
	grpcServer := grpc.NewServer(options...)
	grpcAdapter := grpcInbound.NewAdapter(ts, grpcServer)
	protobuf.RegisterTelemetryServiceServer(grpcServer, grpcAdapter)

	if err := grpcServer.Serve(listener); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

// go-kit lesz használva, mint  mikro-szerviz strukturat tamogato könyvtár
// a szerveren futo appliakcio hexagonal architekturaba lesz irva, illetve a DDD eleimei is megjelennek. Ezzel  a go-kit tokeletesen hasznalhato

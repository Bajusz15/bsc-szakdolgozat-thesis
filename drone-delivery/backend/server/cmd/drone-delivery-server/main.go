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
	"github.com/StefanSchroeder/Golang-Ellipsoid/ellipsoid"
	goKitLog "github.com/go-kit/kit/log"
	"github.com/go-kit/kit/log/level"
	"google.golang.org/grpc"
	"log"
	"net"
	"net/http"
	"os"
	"sync"
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

	//err = generateDeliveryData()
	//if err != nil {
	//	logger.Log("err", err, "desc", "failed to generate delivery data")
	//	panic(err)
	//}
	//outbound adapters
	jsonAdapter := outbound.NewJSONAdapter()

	geo := ellipsoid.Init("WGS84", ellipsoid.Degrees, ellipsoid.Meter, ellipsoid.LongitudeIsSymmetric, ellipsoid.BearingIsSymmetric)
	//services
	var ts telemetry.Service
	var ds drone.Service
	var rs routing.Service
	ts = telemetry.NewService(postgresStorage, logger, geo)
	rs = routing.NewService(logger)
	ds = drone.NewService(postgresStorage, jsonAdapter, logger, rs)
	//REST API
	router := rest.Handler(ds, ts, postgresStorage, mongoStorage)

	wg := new(sync.WaitGroup)
	wg.Add(2)

	//http
	go func(router http.Handler) {
		log.Println("serving http on port: 5000...")
		log.Fatal(http.ListenAndServe(":5000", router))
		wg.Done()
	}(router)

	//gRPC
	go func(service *telemetry.Service) {
		listener, err := net.Listen("tcp", ":50051")
		if err != nil {
			log.Fatal("Error creating to tcp listener")
		}
		var opts []grpc.ServerOption
		grpcServer := grpc.NewServer(opts...)
		grpcAdapter := grpcInbound.NewAdapter(ts, grpcServer)
		protobuf.RegisterTelemetryServiceServer(grpcServer, grpcAdapter)
		log.Println("serving grpc on port 50051")
		log.Fatal(grpcServer.Serve(listener))
		wg.Done()
	}(&ts)

	wg.Wait()

}

// go-kit lesz használva, mint  mikro-szerviz strukturat tamogato könyvtár
// a szerveren futo appliakcio hexagonal architekturaba lesz irva, illetve a DDD eleimei is megjelennek. Ezzel  a go-kit tokeletesen hasznalhato
//
//func generateDeliveryData() error {
//	rand.Seed(time.Now().UnixNano())
//	min := 10
//	max := 30
//	deliveries := rand.Intn(max-min+1) + min
//	//generate latitudes and longitudes for the parcels
//	latitudes := randFloats(48.05, 48.08, deliveries)
//	longitudes := randFloats(20.75, 20.78, deliveries)
//	parcelWeights := randFloats(0.2, 2, deliveries)
//	consumptions := randFloats(300, 800, deliveries)
//	droneWeights := randFloats(3, 15, deliveries)
//
//	var drones = make([]models.Drone, deliveries)
//	var parcels = make([]models.Parcel, deliveries)
//	for i := 0; i < deliveries; i++ {
//		drones[i] = models.Drone{
//			ID:          i + 1,
//			Consumption: consumptions[i],
//			Weight:      droneWeights[i],
//			State:       models.DroneFree,
//		}
//
//		parcels[i] = models.Parcel{
//			ID:     i + 1,
//			Name:   "egy csomag",
//			Weight: parcelWeights[i],
//			DropOffSite: models.GPS{
//				Latitude:  latitudes[i],
//				Longitude: longitudes[i],
//			},
//		}
//	}
//
//	err := insertIntoPostgres(drones, parcels)
//	if err != nil {
//		return err
//	}
//	err = insertIntoMongo(drones, parcels)
//	if err != nil {
//		return err
//	}
//
//	return nil
//}

//func insertIntoPostgres(drones []models.Drone, parcels []models.Parcel) error {
//	connStr := "user=" + os.Getenv("PGUSER") + " dbname=" + os.Getenv("PGDATABASE") + " password=" + os.Getenv("PGPASSWORD") + " host=" + os.Getenv("PGHOST") + " sslmode=disable TimeZone=Europe/Budapest"
//	db, err := sqlx.Open("postgres", connStr)
//	if err != nil {
//		return err
//	}
//	if err = db.Ping(); err != nil {
//		return err
//	}
//
//	log.Println("You are connected to your database")
//	_, err = db.Exec(`TRUNCATE drone RESTART IDENTITY CASCADE`)
//	if err != nil {
//		return err
//	}
//	_, err = db.Exec(`TRUNCATE parcel RESTART IDENTITY CASCADE`)
//	if err != nil {
//		return err
//	}
//	_, err = db.Exec(`TRUNCATE telemetry RESTART IDENTITY CASCADE`)
//	if err != nil {
//		return err
//	}
//
//	for _, d := range drones {
//		_, err = db.Exec(`INSERT INTO drone (id, state, weight, consumption) VALUES ($1, $2, $3, $4)`, d.ID, d.State, d.Weight, d.Consumption)
//		if err != nil {
//			return err
//		}
//	}
//
//	for _, p := range parcels {
//		_, err = db.Exec(`INSERT INTO parcel (id, name, weight, drop_off_latitude, drop_off_longitude ) VALUES ($1, $2, $3, $4, $5)`, p.ID, p.Name, p.Weight, p.DropOffSite.Latitude, p.DropOffSite.Longitude)
//		if err != nil {
//			return err
//		}
//	}
//	return nil
//}

//func insertIntoMongo(drones []models.Drone, parcels []models.Parcel) error {
//	var err error
//	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
//	defer cancel()
//	//log.Println("mongodb://"+sc.UserName+":"+sc.PW+"@"+sc.Host+":"+sc.Port+"/"+sc.Database)
//	client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://"+os.Getenv("MONGO_USER")+":"+os.Getenv("MONGO_PWD")+"@"+os.Getenv("MONGO_HOST")+":"+os.Getenv("MONGO_PORT")+"/"+os.Getenv("MONGO_DB")))
//	//client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://"+sc.Host+":"+sc.Port+"/"+sc.Database))
//	if err != nil {
//		return err
//	}
//	//defer client.Disconnect(ctx)
//	if err := client.Ping(context.TODO(), readpref.Primary()); err != nil {
//		// Can't connect to Mongo server
//		return err
//	}
//	log.Println("You are connected to your database")
//	db := client.Database(os.Getenv("MONGO_DB"))
//	//db.warehouse.insertOne(     { id: 1,  location: { latitude: 48.080922, longitude: 20.766208} } )
//	//_ = db.Collection("warehouse").Drop(context.TODO())
//	_ = db.Collection("telemetry").Drop(context.TODO())
//	_ = db.Collection("drone").Drop(context.TODO())
//	_ = db.Collection("parcel").Drop(context.TODO())
//	err = db.CreateCollection(context.TODO(), "warehouse")
//	err = db.CreateCollection(context.TODO(), "telemetry")
//	err = db.CreateCollection(context.TODO(), "drone")
//	err = db.CreateCollection(context.TODO(), "parcel")
//	for _, d := range drones {
//		_, err = db.Collection("drone").InsertOne(context.TODO(), d)
//		if err != nil {
//			return err
//		}
//	}
//
//	for _, p := range parcels {
//		_, err = db.Collection("parcel").InsertOne(context.TODO(), p)
//		if err != nil {
//			return err
//		}
//	}
//	return nil
//}

package main

import (
	"context"
	"drone-delivery/server/pkg/domain/models"
	"github.com/jmoiron/sqlx"
	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
	"log"
	"math/rand"
	"net/http"
	"os"
	"time"
)

func main() {
	var err error
	router := echo.New()
	router.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Ez a konfigurator program, ami beallitja a drón raj és adatközpont programot")
	})

	router.GET("/configure/scenario/:id", func(c echo.Context) error {
		return c.JSON(http.StatusOK, "scenario configuration complete")
	})
	router.GET("/configure/protocol", func(c echo.Context) error {
		
		return c.JSON(http.StatusOK, "protocol configuration complete")
	})

	router.GET("/configure/database/", func(c echo.Context) error {
		return c.JSON(http.StatusOK, "database configuration complete")
	})

	err = generateDeliveryData()
	if err != nil {
		panic(err)
	}
	log.Fatal(http.ListenAndServe(":3000", router))
}


func generateDeliveryData() error {
	rand.Seed(time.Now().UnixNano())
	min := 10
	max := 30
	deliveries := rand.Intn(max - min + 1) + min
	//generate latitudes and longitudes for the parcels
	latitudes := randFloats(48.05, 48.08, deliveries)
	longitudes := randFloats(20.75, 20.78, deliveries)
	parcelWeights := randFloats(0.2, 2, deliveries)
	consumptions := randFloats(300, 800, deliveries)
	droneWeights := randFloats(3, 15, deliveries)

	var drones = make([]models.Drone, deliveries)
	var parcels = make([]models.Parcel, deliveries)
	for i := 0; i < deliveries; i++ {
		drones = append(drones, models.Drone{
			ID:           i,
			Consumption:  consumptions[i],
			Weight:       droneWeights[i],
		})

		parcels = append(parcels, models.Parcel{
			ID:            i,
			Name:          "egy csomag",
			Weight:        parcelWeights[i],
			DropOffSite:   models.GPS{
				Latitude:  latitudes[i],
				Longitude: longitudes[i],
			},
		})
	}

	err := insertIntoPostgres(drones, parcels)
	if err != nil {
		return err
	}
	err = insertIntoMongo(drones, parcels)
	if err != nil {
		return err
	}

	return nil
}

func randFloats(min, max float64, n int) []float64 {
	res := make([]float64, n)
	for i := range res {
		res[i] = min + rand.Float64() * (max - min)
	}
	return res
}

func insertIntoPostgres(drones []models.Drone, parcels []models.Parcel) error {
	connStr := "user=" + os.Getenv("PGUSER") + " dbname=" + os.Getenv("PGDATABASE") + " password=" + os.Getenv("PGPASSWORD") + " host=" + os.Getenv("PGHOST") + " sslmode=disable TimeZone=Europe/Budapest"
	db, err := sqlx.Open("postgres", connStr)
	if err != nil {
		return err
	}
	if err = db.Ping(); err != nil {
		return err
	}

	log.Println("You are connected to your database")
	for _, d := range drones {
		_, err = db.Exec(`INSERT INTO drone (id, state, weight, consumption) VALUES ($1, 'free', $2, $3)`, d.ID, d.Weight, d.Consumption)
		if err != nil {
			return err
		}
	}

	for _, p := range parcels {
		_, err = db.Exec(`INSERT INTO parcel (id, name, weight, drop_off_gps, assigned_drone, from_address, to_address) VALUES ($1, 'free', $2, $3)`, p.ID, p.Name, p.Weight)
		if err != nil {
			return err
		}
	}



	return nil
}

func insertIntoMongo(drones []models.Drone, parcels []models.Parcel) error {
	var err error
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	//log.Println("mongodb://"+sc.UserName+":"+sc.PW+"@"+sc.Host+":"+sc.Port+"/"+sc.Database)
	client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://"+os.Getenv("MONGO_USER")+":"+os.Getenv("MONGO_PWD")+"@"+os.Getenv("MONGO_HOST")+":"+ os.Getenv("MONGO_PORT")+"/"+os.Getenv("MONGO_DB")))
	//client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://"+sc.Host+":"+sc.Port+"/"+sc.Database))
	if err != nil {
		return err
	}
	//defer client.Disconnect(ctx)
	if err := client.Ping(context.TODO(), readpref.Primary()); err != nil {
		// Can't connect to Mongo server
		return err
	}
	log.Println("You are connected to your database")
	db := client.Database(os.Getenv("MONGO_DB"))
	err = db.CreateCollection(ctx, "warehouse")
	err = db.CreateCollection(ctx, "telemetry")
	err = db.CreateCollection(ctx, "drone")
	err = db.CreateCollection(ctx, "parcel")
	for _, d := range drones {
		_, err = db.Collection("drone").InsertOne(context.TODO(), d)
		if err != nil {
			return err
		}
	}

	for _, p := range parcels {
		_, err = db.Collection("parcel").InsertOne(context.TODO(), p)
		if err != nil {
			return err
		}
	}
	return nil
}

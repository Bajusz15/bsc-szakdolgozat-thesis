package postgres

import (
	"database/sql"
	"drone-delivery/server/pkg/domain/models"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
	"log"
)

type Storage struct {
	db *sqlx.DB
}

type StorageConfig struct {
	UserName string
	Database string
	Host     string
	Port     string
	SSSLMode string
	PW       string
}

func NewStorage(sc StorageConfig) (*Storage, error) {
	var err error
	s := new(Storage)
	connStr := "user=" + sc.UserName + " dbname=" + sc.Database + " password=" + sc.PW + " host=" + sc.Host + " sslmode=disable TimeZone=Europe/Budapest"
	s.db, err = sqlx.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}
	if err = s.db.Ping(); err != nil {
		return nil, err
	}
	log.Println("You are connected to your database")
	return s, nil
}

func (s *Storage) CloseConnection() error {
	err := s.db.Close()
	return err
}

func NewMockStorage(db *sql.DB) (*Storage, error) {
	s := new(Storage)
	s.db = sqlx.NewDb(db, "postgres")
	return s, nil
}
func (s *Storage) GetWarehouse() (models.Warehouse, error) {
	var wh models.Warehouse
	err := s.db.Get(&wh, `SELECT id, gps->'latitude' "location.latitude", gps->'longitude' "location.longitude" FROM warehouse LIMIT 1`)
	return wh, err
}

// todo: put these in seperate files
func (s *Storage) GetTelemetriesByDrone(droneID int) ([]models.Telemetry, error) {
	var t []models.Telemetry
	err := s.db.Select(&t, `SELECT id, drone_id, speed, gps->'longtitude' "location.longitude", gps->'latitude' "location.latitude", altitude, bearing,
       								acceleration, battery_level, battery_temperature, motor_temperatures,time_stamp 
									FROM telemetry 
									WHERE drone_id=$1`, droneID)
	if err != nil {
		return nil, err
	}
	return nil, nil
}

func (s *Storage) InsertTelemetry(droneID int, t models.Telemetry) error {
	_, err := s.db.Exec(`INSERT INTO telemetry (drone_id, speed, gps, altitude, bearing, acceleration, battery_level,
                       			battery_temperature, motor_temperatures, time_stamp) VALUES ($1, $2, $3,$4,$5,$6,$7) `,
		droneID, t.Speed, t.Location, t.Altitude, t.Bearing, t.Acceleration, t.BatteryLevel,
		t.BatteryTemperature, t.MotorTemperatures, t.TimeStamp)
	return err
}

func (s *Storage) GetFreeDrones() ([]models.Drone, error) {
	var drones []models.Drone
	tx, err := s.db.Beginx()
	if err != nil {
		return nil, err
	}
	//this is needed so there is no dirty read, repeatable read or phantom read
	_, err = tx.Exec("SET TRANSACTION ISOLATION LEVEL SERIALIZABLE")
	if err != nil {
		return nil, err
	}
	err = tx.Get(&drones, "SELECT id FROM drone WHERE state='free' ")
	if err != nil {
		tx.Rollback()
		return nil, err
	}
	tx.Commit()
	return drones, nil
}

func (s *Storage) SetDroneStateIfFree(id int, state string) error {
	tx, err := s.db.Beginx()
	if err != nil {
		return err
	}
	//this is needed so there is no dirty read, repeatable read or phantom read
	_, err = tx.Exec("SET TRANSACTION ISOLATION LEVEL SERIALIZABLE")
	if err != nil {
		tx.Rollback()
		return err
	}
	_, err = tx.Exec("UPDATE drone SET state=$1 WHERE id=$2 ", state, id)
	if err != nil {
		tx.Rollback()
		return err
	}
	tx.Commit()
	return nil
}

func (s *Storage) GetParcelsInWarehouse() ([]models.Parcel, error) {
	return nil, nil
}

func (s *Storage) GetDronesDelivering() ([]models.Drone, error) {
	return nil, nil
}

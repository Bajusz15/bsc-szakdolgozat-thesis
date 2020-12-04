package postgres

import (
	"database/sql"
	"github.com/bajusz15/drone-delivery/server/pkg/domain/models"
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

// todo: put these in seperate files
func (s *Storage) GetTelemetry(droneID int) ([]models.Telemetry, error) {
	return nil, nil
}

func (s *Storage) InsertTelemetry(id int, t models.Telemetry) error {
	_, err := s.db.Exec(`INSERT INTO telemetry (drone_id, speed, location, altitude, compass_direction, acceleration, battery_level,
                       			battery_temperature, motor_temperatures, time_stamp) VALUES ($1, $2, $3,$4,$5,$6,$7) `,
		id, t.Speed, t.Location, t.Altitude, t.CompassDirection, t.Acceleration, t.BatteryLevel,
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

func (s *Storage) SetDroneState(id int, state string) error {
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

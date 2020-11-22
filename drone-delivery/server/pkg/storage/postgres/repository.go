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
	return nil
}

func (s *Storage) GetFreeDrones() ([]models.Drone, error) {
	return nil, nil
}
func (s *Storage) GetParcelsInWarehouse() ([]models.Parcel, error) {
	return nil, nil
}

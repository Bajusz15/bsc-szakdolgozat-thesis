package config

import (
	"flag"
	"os"
)

var DroneClientURL string
var DroneClientProtocol string

var PostgresConfig struct {
	UserName string
	Database string
	Host     string
	Port     string
	SSSLMode string
	PW       string
}

func SetConfig() {
	flag.StringVar(&DroneClientURL, "drone client domain url", os.Getenv("DRONE_CLIENT_URL"),
		"An url for the drone client, without protocol")

	PostgresConfig.UserName = os.Getenv("PGUSER")
	PostgresConfig.Database = os.Getenv("PGDATABASE")
	PostgresConfig.Host = os.Getenv("PGHOST")
	PostgresConfig.Port = os.Getenv("PGPORT")
	PostgresConfig.SSSLMode = os.Getenv("PGSSL")
	PostgresConfig.PW = os.Getenv("PGPASSWORD")
}

package config

import (
	"flag"
	"os"
)

var (
	ServerDomain string
	ServerPort   string
)

var PostgresConfig struct {
	UserName string
	Database string
	Host     string
	Port     string
	SSSLMode string
	PW       string
}

func SetConfig() {
	flag.StringVar(&ServerDomain, "server domain", os.Getenv("SERVER_DOMAIN"), "domain of server, with protocol")
	flag.StringVar(&ServerPort, "server port", os.Getenv("SERVER_PORT"), "the port the server is listening on")

	PostgresConfig.UserName = os.Getenv("PGUSER")
	PostgresConfig.Database = os.Getenv("PGDATABASE")
	PostgresConfig.Host = os.Getenv("PGHOST")
	PostgresConfig.Port = os.Getenv("PGPORT")
	PostgresConfig.SSSLMode = os.Getenv("PGSSL")
	PostgresConfig.PW = os.Getenv("PGPASSWORD")

}

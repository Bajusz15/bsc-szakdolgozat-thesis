package config

import "flag"

var (
	ServerDomain string
	ServerPort string
)

func SetConfig(sd string) {
	flag.StringVar(&ServerDomain, "server domain", sd, "domain of server, with protocol")
	flag.StringVar(&ServerPort, "server port", sd, "the port the server is listening on")
}
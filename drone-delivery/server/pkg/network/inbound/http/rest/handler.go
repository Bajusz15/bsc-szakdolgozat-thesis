package rest

import (
	"github.com/bajusz15/drone-delivery/server/pkg/domain/services/drone"
	"github.com/bajusz15/drone-delivery/server/pkg/domain/services/telemetry"
	"github.com/labstack/echo/v4"
	"net/http"
)

func Handler(d drone.Service, t telemetry.Service) http.Handler {
	router := echo.New()
	router.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")

	})
	router.GET("/drones", func(c echo.Context) error {
		return c.String(http.StatusOK, "Itt lesznek a drónok!")
	})
	router.GET("/drones", func(c echo.Context) error {
		return c.String(http.StatusOK, "Itt lesznek a drónok!")
	})
	return router
}

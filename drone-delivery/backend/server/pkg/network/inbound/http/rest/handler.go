package rest

import (
	"drone-delivery/server/pkg/domain/services/drone"
	"drone-delivery/server/pkg/domain/services/telemetry"
	"github.com/labstack/echo/v4"
	"net/http"
)

func Handler(d drone.Service, t telemetry.Service) http.Handler {
	router := echo.New()

	router.POST("/api/delivery", func(c echo.Context) error {
		d.DeliverParcels()
		return c.JSON(http.StatusOK, "delivery started")
	})
	router.POST("/api/delivery/telemetry", SaveTelemetry(d, t))
	router.GET("/api/delivery/drones", GetDronesInDelivery(d, t))

	return router
}

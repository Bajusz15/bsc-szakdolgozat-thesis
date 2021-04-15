package rest

import (
	"drone-delivery/drone-swarm/pkg/domain/warehouse"
	"drone-delivery/server/pkg/domain/models"
	"github.com/labstack/echo/v4"
	"net/http"
)

type ProvisionData struct {
	Drone     models.Drone
	Warehouse models.Warehouse
}

func Handler(w warehouse.Service) http.Handler {
	router := echo.New()

	router.POST("/provision", func(c echo.Context) error {
		var payload ProvisionData
		err := c.Bind(&payload)
		if err != nil {
			return echo.NewHTTPError(http.StatusBadRequest, "Bad json format")
		}
		err = w.ProvisionDrone(payload.Warehouse, payload.Drone)
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Could not provision drone")
		}
		return c.JSON(http.StatusOK, struct {
			Message string `json:"message"`
		}{"provision successful"})
	})

	router.POST("/drone/destination/add", func(c echo.Context) error {
		//TODO: add a new destination to the drone's destinations (before warehouse)
		return nil
	})

	router.POST("/drone/route/re-route", func(c echo.Context) error {
		//TODO: overwrite destinations, and add a new one
		return nil
	})

	router.POST("/emergency/land", func(c echo.Context) error {
		//TODO: call flying service to make emergency landing
		return nil
	})

	router.POST("/emergency/withdraw", func(c echo.Context) error {
		//TODO: call flying service to make emergency back to warehouse
		//
		return nil
	})

	return router
}

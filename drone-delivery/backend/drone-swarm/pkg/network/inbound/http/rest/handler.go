package rest

import (
	"drone-delivery/drone-swarm/pkg/domain/warehouse"
	"drone-delivery/server/pkg/domain/models"
	"github.com/labstack/echo/v4"
	"net/http"
)

func Handler(w warehouse.Service) http.Handler {
	router := echo.New()
	router.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})

	router.POST("/provision", func(c echo.Context) error {
		var payload models.Drone
		err := c.Bind(&payload)
		if err != nil {
			return echo.NewHTTPError(http.StatusBadRequest, "Bad json format")
		}
		err = w.ProvisionDrone(payload)
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Could not provision drone")
		}
		return c.JSON(http.StatusOK, struct {Message string `json:"message"`}{"provision successful"})
	})

	router.POST("/route/add", func(c echo.Context) error {
		//TODO: add a new destination to the drone's destinations
		return nil
	})

	router.POST("/route/re-route", func(c echo.Context) error {
		//TODO: overwrite destinations, and add a new one
		return nil
	})

	router.POST("/emergency/land", func(c echo.Context) error {
		//TODO: call flying service to make emergency landing
		return nil
	})

	router.POST("/emergency/withdraw", func(c echo.Context) error {
		//TODO: call flying service to make emergency back to warehouse
		return nil
	})

	
	return router
}

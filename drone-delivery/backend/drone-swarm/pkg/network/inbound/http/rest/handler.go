package rest

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

func Handler() http.Handler {
	router := echo.New()
	router.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})

	router.GET("/provision", func(c echo.Context) error {
		return c.JSON(http.StatusOK, struct {
			Message string `json:"message"`
		}{"provision successful"})
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

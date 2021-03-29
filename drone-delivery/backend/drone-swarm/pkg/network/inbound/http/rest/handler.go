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
		//todo: domainbol meghivni a
		return c.JSON(http.StatusOK, struct {
			Message string `json:"message"`
		}{"provision successful"})
	})
	return router
}

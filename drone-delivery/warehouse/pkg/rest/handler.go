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
		return c.String(http.StatusOK, "Drón elindult")
	})
	return router
}

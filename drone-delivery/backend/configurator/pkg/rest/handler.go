package rest

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

func Handler() http.Handler {
	router := echo.New()
	router.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Ez a szimulacio, itt tekinthetjuk meg az adatokat is majd.")

	})
	return router
}

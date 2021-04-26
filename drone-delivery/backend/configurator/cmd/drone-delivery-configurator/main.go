package main

import (
	"github.com/labstack/echo/v4"
	"log"
	"net/http"
)

func main() {
	router := echo.New()
	router.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Ez a konfigurator program, ami beallitja a drón raj és adatközpont programot")
	})

	router.GET("/configure/generate/", func(c echo.Context) error {

		return c.JSON(http.StatusOK, "generation  complete")
	})
	router.GET("/configure/protocol", func(c echo.Context) error {

		return c.JSON(http.StatusOK, "protocol configuration complete")
	})

	router.GET("/configure/database/", func(c echo.Context) error {
		return c.JSON(http.StatusOK, "database configuration complete")
	})

	log.Fatal(http.ListenAndServe(":3000", router))
}

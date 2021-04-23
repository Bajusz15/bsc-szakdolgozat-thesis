package rest

import (
	"drone-delivery/drone-swarm/pkg/domain/telemetry"
	"drone-delivery/drone-swarm/pkg/domain/warehouse"
	"drone-delivery/drone-swarm/pkg/network/outbound/http/grpc"
	"drone-delivery/drone-swarm/pkg/network/outbound/http/json"
	"drone-delivery/server/pkg/domain/models"
	"github.com/labstack/echo/v4"
	"net/http"
)

type ProvisionData struct {
	Drone     models.Drone
	Warehouse models.Warehouse
}

//
//func ConfigurationHandler() http.Handler {
//	router := echo.New()
//	router.POST()
//}

func Handler(w warehouse.Service, t telemetry.Service) http.Handler {
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

	router.PUT("/configure/protocol/:name", func(c echo.Context) error {
		switch c.Param("name") {
		case "grpc":
			grpcOutboundAdapter := grpc.NewOutBoundAdapter()
			t.ChangeService(grpcOutboundAdapter)

		case "http":
			jsonOutboundAdapter := json.NewOutBoundAdapter()
			t.ChangeService(jsonOutboundAdapter)
		default:
			return echo.NewHTTPError(http.StatusBadRequest, "no such protocol supported")
		}
		return c.JSON(http.StatusOK, "protocol configuration complete")
	})

	return router
}

package rest

import (
	"drone-delivery/server/pkg/domain/models"
	"drone-delivery/server/pkg/domain/services/drone"
	"drone-delivery/server/pkg/domain/services/telemetry"
	"github.com/labstack/echo/v4"
	"net/http"
)

type TelemetryData struct {
	DroneID   int              `json:"drone_id"`
	Telemetry models.Telemetry `json:"telemetry"`
}

func SaveTelemetry(d drone.Service, t telemetry.Service) echo.HandlerFunc {
	return func(context echo.Context) error {
		var err error
		var td TelemetryData
		//b, err := ioutil.ReadAll(context.Request().Body)
		//defer context.Request().Body.Close()
		//
		//err = json.Unmarshal(b, &td)
		err = context.Bind(&td)
		//log.Println(td)
		if err != nil {
			return echo.NewHTTPError(http.StatusOK, "could not save telemetry")
		}
		err = t.SaveTelemetry(td.DroneID, td.Telemetry)
		if err != nil {
			return echo.NewHTTPError(http.StatusOK, "could not save telemetry")
		}
		return context.JSON(http.StatusOK, "succesfully saved telemetry")
	}
}

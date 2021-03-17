package outbound

import (
	"bytes"
	"encoding/json"
	"errors"
	"github.com/bajusz15/drone-delivery/server/pkg/config"
	"io/ioutil"
	"log"
	"net/http"
)

type JSONAdapter struct{} //just a wrapper

func NewJSONAdapter() *JSONAdapter {
	a := new(JSONAdapter)
	return a
}

func (a *JSONAdapter) FetchProvisionDroneEndpoint(droneID int, trackingID int) (success bool, err error) {
	data := struct {
		DroneID    int `json:"drone_id"`
		TrackingID int `json:"tracking_id"`
	}{DroneID: droneID, TrackingID: trackingID}

	buf := new(bytes.Buffer)
	_ = json.NewEncoder(buf).Encode(data)
	resp, err := http.Post(config.DroneClientProtocol+config.DroneWarehouseURL, "application/json", buf)
	if err != nil {
		return false, err
	}

	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return false, err
	}
	if resp.StatusCode != http.StatusOK {
		var r interface{}
		_ = json.Unmarshal(body, &r)
		log.Print(body)
		return false, errors.New("failed to start drone")
	}

	return true, nil
}

package http

import (
	"bytes"
	"drone-delivery/drone-swarm/pkg/config"
	"drone-delivery/server/pkg/domain/models"
	"encoding/json"
	"errors"
	"net/http"
	"strconv"
)

type Adapter interface {
	SendTelemetryDataToServer() error
}

type Repository interface {

}

type adapter struct {
}

func NewAdapter() *adapter {
	return &adapter{}
}

func (a *adapter) SendTelemetryDataToServer(t models.Telemetry) error {
	postBody, _ := json.Marshal(t )
	responseBody := bytes.NewBuffer(postBody)
	//Leverage Go's HTTP Post function to make request
	resp, err := http.Post(config.ServerDomain + ":" + config.ServerPort, "application/json", responseBody)
	//Handle Error
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusCreated && resp.StatusCode != http.StatusAccepted {
		return errors.New("request failed, response status is " + strconv.Itoa(resp.StatusCode))
	}
	//Read the response body
	//body, err := ioutil.ReadAll(resp.Body)
	//if err != nil {
	//	return err
	//}
	//sb := string(body)
	return nil
}
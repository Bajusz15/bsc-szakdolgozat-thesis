package models

import "time"

type Telemetry struct {
	Speed              float64          // meter/sec
	Location           GPS              `json:"location"`
	Altitude           float64          `json:"altitude"`          // meter
	Bearing            float64          `json:"compass_direction"` //bearing
	Acceleration       float64          `json:"acceleration"`      //TODO: utana nezni ezt mibe kell mérni
	BatteryLevel       int              `json:"battery_level"`     // ez csak százalék, 1-100
	BatteryTemperature int              `json:"battery_temperature"`
	MotorTemperatures  []int            `json:"motor_temperatures"`
	Errors             []TelemetryError `json:"errors" db:"errors"`
	TimeStamp          time.Time
}

type TelemetryError int

const (
	MotorFailure TelemetryError = iota
	BeaconSignalStrengthLow
	BeaconSignalInterference
	BeaconTemperatureTooHigh
	GPSInteference
	GPSSignalLost
	GPSTemperatureTooHigh
	ProcessorTemperatureTooHigh
	BatteryFailure
	FailedToEjectPackage
	PackageLost
	DestinationDistanceTooFar
)

type GPS struct {
	Latitude  float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
}

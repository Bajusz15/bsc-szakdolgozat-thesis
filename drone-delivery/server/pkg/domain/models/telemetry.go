package models

import "time"

type Telemetry struct {
	Speed              int
	Location           GPS `json:"location"`
	Altitude           float64
	CompassDirection   float64
	Acceleration       float64
	BatteryLevel       int   `json:"battery_level"`
	BatteryTemperature int   `json:"battery_temperature"`
	MotorTemperatures  []int `json:"motor_temperatures"`
	TimeStamp          time.Time
}

type GPS struct {
	Latitude  float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
}

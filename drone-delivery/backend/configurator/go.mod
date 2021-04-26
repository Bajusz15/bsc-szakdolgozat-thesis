module github.com/bajusz15/drone-delivery/simulation

go 1.16


require (
	drone-delivery/server v0.0.0
	github.com/labstack/echo/v4 v4.1.17
)

replace drone-delivery/server => ../server
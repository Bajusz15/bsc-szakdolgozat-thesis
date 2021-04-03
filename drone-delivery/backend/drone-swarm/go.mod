module drone-delivery/drone-swarm

go 1.16



require (
	github.com/StefanSchroeder/Golang-Ellipsoid v0.0.0-20200928074047-3758eb9e9574
	github.com/go-kit/kit v0.10.0
	github.com/labstack/echo/v4 v4.1.17
	drone-delivery/server v0.0.0
)

replace (
	 drone-delivery/server => ../server
)


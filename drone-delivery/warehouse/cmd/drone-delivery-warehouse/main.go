package main

import (
	"fmt"
	"github.com/bajusz15/drone-delivery/warehousea/pkg/rest"
	"log"
	"net/http"
)

func main() {
	fmt.Println("ez egy kliens, azaz 1 db drón a szimulációban, a szimuláció ezt a klienst sok példányban fogja futtatni")
	log.Fatal(http.ListenAndServe(":2000", rest.Handler()))
}

//ez csak egy sima kliens (drón a szimulacioban), ami megkapja a celt es ez alapjan fog az utvonal alatt mindenfele adatokat generalni es kuldeni magarol.
//Viszonylag buta, par dolgot kell jol csinalnia, az adatokat gyorsan es minimalis eroforras felhasznalasaval küldje a szervernek.

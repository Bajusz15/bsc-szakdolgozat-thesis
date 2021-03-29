package warehouse

//TODO: make model of drone

type Drone struct {
	ID     int `json:"id" db:"id"`
	Parcel `json:"parcel"`
}

type Parcel struct {
	TrackingID  int             `json:"tracking_id"`
	Weight      float64         `json:"weight"`
	FromAddress ShippingAddress `json:"from_address"` //ez lehet nem is kell
	ToAddress   ShippingAddress `json:"to_address"`
}

type ShippingAddress struct {
	Name    string  `json:"name" validate:"required"`
	Country string  `json:"country" validate:"required"`
	Region  *string `json:"region"`
	City    string  `json:"city" validate:"required"`
	Zip     string  `json:"zip" validate:"required"`
	Street  string  `json:"street" validate:"required"`
	Street2 string  `json:"street_2"`
	Street3 string  `json:"street_3"`
}

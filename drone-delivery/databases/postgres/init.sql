CREATE TYPE drone_state AS ENUM ('free', 'in-flight');

CREATE TABLE drone
(
    id    SERIAL PRIMARY KEY,
    state drone_state DEFAULT 'free'
);


CREATE TABLE shipping_address
(
    name    VARCHAR(50) NOT NULL,
    country VARCHAR(10) NOT NULL,
    region  VARCHAR(15) DEFAULT NULL,
    city    VARCHAR(50) NOT NULL,
    zip     INT         NOT NULL,
    street  VARCHAR(50) NOT NULL,
    street2 VARCHAR(50) DEFAULT NULL,
    street3 VARCHAR(50) DEFAULT NULL
);
-- jsonb gyorsabb, és keresésre ugyse használjuk csak elmentjük
-- assigned_drone opcionális, a még nem szállitasban levo csomagoknál NULL
CREATE TABLE parcel
(
    id             SERIAL PRIMARY KEY,
    name           VARCHAR(50) NOT NULL,
    tracking_id    VARCHAR(25)               default '',
    weight         FLOAT                     default 1,
    location       jsonb                     DEFAULT '{}'::jsonb,
    assigned_drone INT REFERENCES drone (id) DEFAULT NULL,
    from_address   INT REFERENCES shipping_address (id),
    to_address     INT REFERENCES shipping_address (id)
);


CREATE TABLE telemetry
(
    id                  SERIAL PRIMARY KEY,
    drone_id            INT REFERENCES drone (id),
    speed               INT       DEFAULT 0,
    location            jsonb     DEFAULT '{}'::jsonb,
    altitude            FLOAT     default 1,
    compass_direction   FLOAT     DEFAULT '{}'::jsonb,
    acceleration        FLOAT     DEFAULT '{}'::jsonb,
    battery_level       INT       DEFAULT NULL,
    battery_temperature INT       DEFAULT NULL,
    motor_temperatures  INTEGER[],
    time_stamp          timestamp DEFAULT now()
);






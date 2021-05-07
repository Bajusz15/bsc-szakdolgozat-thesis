#Máté Bajusz's bsc thesis, drone delivery 

This file contains instructions on setting up the drone-deliver simulation.

## Usage

**1) Check if your directory structure looks like the following:**
+ drone-delivery
  - backend
    - databases
    - server
    - drone-swarm
  - benchmark
  - web-client  
  - docker-compose.yml
  -   README.md
  
**2) Go into the drone-delivery and start the project.**
+ On the very first time you start this

  Make sure you have PostgreSQL installed, and running on your machine.
  Make sure you have MongoDB installed, and running on your machine.
```bash
$ docker-compose up --build
```
+ If you have already started it, the application needs no rebuilding, if there was no code change
```bash
$ docker-compose up 
```

**3) Start using the application in the browser with /web-client/index.html page**



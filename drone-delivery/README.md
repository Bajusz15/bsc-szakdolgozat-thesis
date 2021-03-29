#Máté Bajusz's bsc thesis, drone delivery 

This repository contains code for the simulation, server, warehouse and setting up databases...

## Usage

**1) Check if your directory structure looks like the following:**
+ drone-delivery
  - databases
  - server
  - simulation
  - drone-swarm
  - docker-compose.yml
  - README.md
  
**2) Go into the drone-delivery and start the project.**
+ On the very first time you start this

```bash
$ docker-compose up --build
```
+ If you have already started it, the application needs no rebuilding, if there was no code change
```bash
$ docker-compose up 
```

**3) Start using the application on localhost:3000**



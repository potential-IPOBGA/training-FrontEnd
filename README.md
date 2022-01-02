#This is a front-end project for Training system

##See below picture as design
![Design](system.png)

# How to start Training-FrontEnd

There are two ways to initialize and start this project

### First-time setup

## Install dependencies

###With docker
```shell
docker build -t training:front-end .
```

###Without docker
```shell
yarn
```
or
```shell
yarn install
```

## Run locally
- Start your UI via

###With docker
```shell
docker run -p 3000:3000 training:front-end
```
or
```shell
docker compose up
```
###Without docker

```shell
yarn start
```
or
```shell
yarn run start
```

## NodeJS REST API example

The application is an example of REST API service based on NodeJS + Docker + MongoDB.
App shows how to fast build reliable API endpoint with some secured resource attributes.
`Client` model used as resource and have encrypted phone number that is stored in database as a ahs and displayed in format (*****(0000)).

###Installation
To run the example you must have Docker installed. Check the installation instructions for different platforms:
https://docs.docker.com/engine/installation/

All related software like npm or mongodb will come with docker images and are not
necessary to install separately.

To install and run app:
1. clone repository
```
git clone https://github.com/moicirk/nodejs-docker-mongo
```

2. run docker compose
```
docker-compose build
docker-compose up
```

##Usage
The API is running on port 3000, http://localhost:3000/api on local machine or http://{server-ip}:3000/api on remote server.
Available endpoints

* `GET /clients`: list of clients, resource attributes can be used for query (f.e. ?name=Igor)
* `POST /clients`: create a new client
* `OPTIONS /clients`: shows information about resource and available verbs
* `GET /client/<mongoid>`: return details of one client
* `PUT /client/<mongoid>`: update client by id
* `DELETE /client/<mongoid>`: delete client by id

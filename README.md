# Node-mongo-mongoExpress_dockerEnv
Node , mongo and mongo-express services linked in docker-compose.yml

FROM superLightWeight node image of 170Mb tagged 17-alpine3.14

originally the port 3000 of the container is exposed for image listening , fell free to change it

$ git clone https://github.com/christian-cell/Node-mongo-mongoExpress_dockerEnv.git

$ curl http://localhost:4000/userRegister/saludo 
to be wellcome



$ cd Node-mongo-mongoExpress_dockerEnv

to create your environment just run 
$ docker-compose up -d --build

if your desire to create your own image replace in docker-compose.yml
"image: christianphp/mi-node-app:1.0.0" for "build: ."

and continue your node application


# Node-mongo-mongoExpress_dockerEnv
Node , mongo and mongo-express services linked in docker-compose.yml

$ git clone https://github.com/christian-cell/Node-mongo-mongoExpress_dockerEnv.git

$ cd Node-mongo-mongoExpress_dockerEnv

to create your environment just run 
$ docker-compose up -d --build

if your desire to create your own image replace in docker-compose.yml
"image: christianphp/mi-node-app:1.0.0" for "build: ."

and continue your node application

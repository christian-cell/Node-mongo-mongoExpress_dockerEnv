FROM node:17-alpine3.14

MAINTAINER christianphp

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# install nodemon globally
RUN npm install nodemon -g

COPY . .

EXPOSE 3000

CMD ["nodemon", "./src/index.js"]

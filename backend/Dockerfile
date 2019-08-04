FROM node:10.15-alpine

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install
COPY ./index.js .
COPY ./server.js .
COPY ./app ./app
COPY ./database ./database

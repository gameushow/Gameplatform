FROM node:10.15-alpine

WORKDIR /app

COPY package.json .
COPY server.js .

RUN yarn install

COPY . .



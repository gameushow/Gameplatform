FROM node:10.15-alpine

WORKDIR /app

RUN apk add --update-cache python make g++ curl

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY next.config.js .
COPY ./components ./components
COPY ./config ./config
COPY ./pages ./pages
COPY ./service ./service
COPY ./static ./static
COPY ./utils ./utils

RUN yarn build
EXPOSE 3000
CMD ["yarn","start"] 

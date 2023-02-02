FROM node:alpine as base

WORKDIR /winston-nodejs-example # current project name 

COPY package.json ./

RUN rm -rf node_modules && npm i

COPY . .

CMD ["node",  "server.js"]
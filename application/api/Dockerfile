FROM node:14.17.6-alpine

WORKDIR /var/www

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]
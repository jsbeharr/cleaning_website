FROM node:11.15.0 as build-stage

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install

COPY ./ /app/

RUN yarn build

FROM nginx:1.15.2-alpine

COPY --from=build-stage /app/build/ /var/www/

COPY nginx.conf /etc/nginx/nginx.conf

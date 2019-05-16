# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:11.15.0 as build-stage

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install

COPY ./ /app/

RUN yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15.2-alpine

COPY --from=build-stage /app/build/ /var/www/

COPY nginx.conf /etc/nginx/nginx.conf

# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:11.15.0 as build-stage

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install

COPY ./ /app/

CMD ["yarn", "server"]

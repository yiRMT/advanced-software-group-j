FROM node:16-alpine

WORKDIR /app

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

ARG PORT=8081
ENV PORT $PORT
EXPOSE $PORT

COPY ./src/app-server/package.json ./src/app-server/yarn.lock ./
RUN npm install --global expo-cli \
  && npm install --global @expo/ngrok@^4.1.0
ENTRYPOINT yarn install && yarn dev
FROM node:16-alpine

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=8081
ENV PORT $PORT
EXPOSE $PORT 8082 8083

# install global packages
RUN npm install --global expo-cli

WORKDIR /app
COPY /src/app-server .

RUN yarn install
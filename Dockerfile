# module install
FROM node:20-alpine as module-install-stage
# set working directory
WORKDIR /app
COPY package.json /app/package.json
RUN apk add yarn
RUN yarn install --production

# build
FROM node:20-alpine as build-stage
USER root
COPY --from=module-install-stage /app/node_modules/ /app/node_modules
WORKDIR /app
COPY /src /app/src
COPY /public /app/public
COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json
RUN npm i -D react-router-dom@latest
RUN npm run build

# serve
FROM node:20-alpine
COPY --from=build-stage /app/build/ /app/build
RUN npm install -g serve
# start app
EXPOSE 443
EXPOSE 80
CMD ["serve", "-s","app/build"]

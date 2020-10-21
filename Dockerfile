FROM node:12.19.0 AS build
WORKDIR /app
COPY  . /app
RUN npm install
RUN parcel build src/index.html -d dist

FROM nginx:1.19.3
WORKDIR /app
COPY --from=build ./dist /app
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
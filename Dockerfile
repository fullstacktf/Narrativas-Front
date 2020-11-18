FROM node:12.19.0 AS build
WORKDIR /app
COPY  . /app
RUN npm install
RUN npm run build

FROM nginx:1.19.3
WORKDIR /
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY conf/rollify.conf /etc/nginx/conf.d
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
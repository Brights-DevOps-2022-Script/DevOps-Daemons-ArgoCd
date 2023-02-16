FROM node:alpine AS build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

#COPY nginx.conf /etc/nginx/nginx.conf
#COPY ./nginx_common.conf /etc/nginx/nginx_common.conf

COPY --from=build-stage /app/build/ /usr/share/nginx/html

#CMD ["nginx", "-g", "daemon off;"]

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./nginx_common.conf /etc/nginx/nginx_common.conf
EXPOSE 80
COPY ./index.html /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
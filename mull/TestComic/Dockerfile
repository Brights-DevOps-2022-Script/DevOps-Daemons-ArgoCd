FROM nginx:alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY ./nginx_common.conf /etc/nginx/nginx_common.conf

COPY ./assets/index.html /usr/share/nginx/html/index.html 
COPY ./assets /usr/share/nginx/html/assets
EXPOSE 80

# CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]

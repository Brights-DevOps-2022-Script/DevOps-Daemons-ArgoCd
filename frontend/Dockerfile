FROM nginx:alpine

COPY ./index.html /usr/share/nginx/html

RUN mkdir /usr/share/nginx/html/assets
RUN chown -R nginx:nginx /usr/share/nginx/html/assets
RUN chmod -R 755 /usr/share/nginx/html/assets

COPY ./assets /usr/share/nginx/html/assets/
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN ls -R /usr/share/nginx/html
RUN ls -R /usr/share/nginx/html/assets
RUN ls -R /usr/share/nginx/html/assets/images

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

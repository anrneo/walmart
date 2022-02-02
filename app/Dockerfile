FROM node:14-alpine as front
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]




#FROM nginx  
#COPY /dist/walmart /usr/share/nginx/html


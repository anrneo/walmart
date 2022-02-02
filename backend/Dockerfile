FROM node:14-alpine as back
RUN mkdir -p /backend
WORKDIR /backend
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
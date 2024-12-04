# First stage of building angular image
FROM node:lts-alpine3.20 as build 
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app/
RUN npm run build --prod


# Second stage of building angular image
FROM nginx:stable-alpine-perl
COPY --from=build /app/dist/first-angular /usr/share/nginx/html/html




FROM node:20.9.0 as build
WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli

EXPOSE 80
FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN rm -rf node_modules
RUN rm -rf package-lock.json
RUN npm install npm
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

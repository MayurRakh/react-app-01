FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN rm -rf node_modules
RUN npm install npm@latest -g
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install npm@latest -g
RUN npm i react-scripts
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

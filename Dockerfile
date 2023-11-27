FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install npm@{latest version}
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

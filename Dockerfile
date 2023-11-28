FROM node:latest
WORKDIR /app
COPY package*.json ./
USER node
RUN npm install npm@latest -g
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

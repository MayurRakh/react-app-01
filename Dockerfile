FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN rm -rf node_modules
RUN rm -rf package-lock.json
# RUN npm install
RUN npm install -g react-scripts
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

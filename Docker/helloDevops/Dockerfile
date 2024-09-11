FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN chmod +x node_modules/.bin/nodemon

EXPOSE 3700

CMD ["npm", "start"]

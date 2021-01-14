FROM node:lts-slim

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 5000

# You can change this
CMD [ "node", "index.js" ]
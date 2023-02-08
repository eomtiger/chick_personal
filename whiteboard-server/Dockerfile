FROM    node:14.21.2
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "sudo", "node", "index.js" ]
EXPOSE 8081
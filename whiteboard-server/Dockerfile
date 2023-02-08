FROM    node:14.21.2
COPY    package*.json ./
RUN     npm install
ARG     FILE=src/index.js
COPY    ${FILE} index.js
CMD ["sudo", "node", "index.js" ]
EXPOSE 8081
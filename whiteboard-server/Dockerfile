FROM    node:14.21.2
ARG     FILE=src/index.js
COPY    ${FILE} index.js
ENTRYPOINT ["sudo", "node", "index.js"]
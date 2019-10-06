FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Create app dircetory
WORKDIR /home/node/app

# Install app dependencies
# Use a wildcard to get both package files
COPY package*.json ./

USER node

RUN npm install

# Bundle app source
COPY --chown=node:node . .

EXPOSE 8080

CMD ["node", "server.js"]

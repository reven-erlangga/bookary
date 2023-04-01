###################
# BUILD FOR PRODUCTION
###################

FROM node:18 As build

# Create app directory
WORKDIR /usr/src/app

# Install all depedency
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
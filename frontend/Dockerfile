# base image
FROM node:alpine

# set working directory
WORKDIR /frontend

# install and cache app dependencies
COPY package*.json ./
RUN npm install
RUN chown -R node.node /frontend
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
 
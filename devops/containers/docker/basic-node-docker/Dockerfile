# Pull base image with NodeJS on it
FROM node:14-alpine

# Creating working directory where app will live
WORKDIR /usr/app

# Copy package.json files over
COPY ./package*.json ./

# Install Dependencies - only runs on first build or when new deps are in package files - this is a cache improvement
RUN npm install

# Copy rest of source code
COPY ./ ./

# Default Command on Container start - Runs app 
CMD ["npm", "run", "dev"]

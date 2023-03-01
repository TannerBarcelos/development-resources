FROM node:latest
WORKDIR /usr/src/app
COPY package*.json  ./
RUN npm install
COPY . .
EXPOSE 3001
CMD npm run devStart

# Build this image - docker build . -t express-postgres
# Run the newly created container from this image - docker run -p 3001:3001 -d express-postgres
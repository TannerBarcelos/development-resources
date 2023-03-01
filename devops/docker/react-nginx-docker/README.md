# Docker with React and Nginx

## About the App

This application serves as a basic representation and reference for how to setup a react app with Nginx on Docker and deploy it to AWS or any other hosting service. It uses the latest standards for Docker and React Development and is very important in the ever growing micro-service based development workflow we are living in today. As an engineer at Visa, we will be relying heavily on workflows based off this strategy, so this is also a learnign reference for myself and a means for others to realize the real-world use case of a project that starts from a bare-bones place like this one.

## Running the App

> The app uses a development workflow and a Production workflow. For development, follow the development instructions. For production, follow the same.

#### Run in Development

**With Dockefile**

1. Ensure Docker is installed and running on your machine
2. Open the application in your text editor of choice, and toggle open the terminal
3. In the terminal, we want to run this application (using Docker) locally. To do so, run the following command

```bash
docker build -t react-docker-nginx -f Dockerfile.dev .
docker run -d -p 3001:3000 -v /app/node_modules -v $(pwd):/app react-docker-nginx
```

4. Open your browser and go to localhost:3001 and you should the application running

**With Docker Compose**

```bash
docker compose up
```

const express = require('express');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient({
  host: 'redis-server', // Note using container name! - This would be an address of the redis instance in localhost (or somewhere else) if not using Redis and NodeJS in Docker with Docker Compose here in this codebase example
  port: 6379,
});

redisClient.set('visits', 1);

app.get('/', (req, res) => {
  redisClient.get('visits', (err, visits) => {
    res.send(`<h1>Number of visits: ${visits}</h1>`);
    redisClient.set('visits', parseInt(visits) + 1);
  });
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

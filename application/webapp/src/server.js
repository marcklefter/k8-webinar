const express = require('express');
const Redis   = require('ioredis');

// ...
// Configure Redis.
const redis = new Redis({
  host: 'svc-redis'
});

// ...
// Configure Express.
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/api/location', async (_req, res) => {
  const positions = await redis.lrange('positions', 0, 100);

  res.send(positions);
});

// ...

app.listen(3000);
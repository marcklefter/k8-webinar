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

app.use(express.json());

app.post('/api/location', async (req, res) => {
  await redis.lpush('positions', JSON.stringify(req.body));

  res.send('OK');
});

// ...

app.listen(3000);
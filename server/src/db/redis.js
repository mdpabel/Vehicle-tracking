const redis = require('redis');

const redisClient = redis.createClient();

(async () => {
  await redisClient.connect();
})();

redisClient.on('error', (err) => {
  console.error('redisClient Error', err);
});

redisClient.on('connect', function () {
  console.log('redis connected');
});

module.exports = redisClient;

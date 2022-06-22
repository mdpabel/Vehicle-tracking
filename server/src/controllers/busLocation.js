// const redis = require('redis');

// const redisClient = require('../db/redis');
// const { REDIS_KEYS } = require('../helpers/redisKeys');

// const storeBusLocation = (req, res) => {
//   const { lat, lon, busId } = req.body;
//   const location = {
//     lat,
//     lon,
//   };
//   // const destination = req.body.destination;

//   redisClient.hSet(REDIS_KEYS.BUS_LOCATION, busId, JSON.stringify(location));

//   res.status(200).json({
//     result: `user location updated: lat=${lat}, long=${lon}`,
//   });
// };

// const getAllBusLocations = (req, res) => {
//   redisClient.hGetAll(REDIS_KEYS.BUS_LOCATION, (err, locations) => {
//     console.log(err, locations);

//     // let locationList = [];
//     // for (const key in locations) {
//     //   locationList.push(JSON.parse(locations[key]));
//     // }

//     // return res.status(200).json(locationList);
//   });
//   // res.send('Test');
//   redisClient.hGetAll('buslocation', function (err, value) {
//     console.log(value);
//     console.log(err);
//   });
// };

// module.exports = {
//   storeBusLocation,
//   getAllBusLocations,
// };

const getGpsData = (req, res, next) => {
  res.send('GET GPS DATA');
};

const postGpsData = (req, res, next) => {
  console.log(req.body);
  res.send('Data received!');
};

module.exports = {
  getGpsData,
  postGpsData,
};

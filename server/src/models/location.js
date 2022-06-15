const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationScheam = new Schema({
  busId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  lat: {
    type: String,
    required: true,
  },
  lon: {
    type: String,
    required: true,
  },
});

const Location = mongoose.model('Location', locationScheam);

module.exports = Location;

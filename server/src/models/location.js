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
  lattitude: {
    type: String,
  },
  longitude: {
    type: String,
    required: true,
  },
  speed: {
    type: String,
    required: true,
  },
});

const Location = mongoose.model('Location', locationScheam);

module.exports = Location;

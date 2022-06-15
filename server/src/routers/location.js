const express = require('express');
const { getGpsData, postGpsData } = require('../controllers/location');

const router = express.Router();

router.route('/gpsdata').get(getGpsData).post(postGpsData);

module.exports = router;

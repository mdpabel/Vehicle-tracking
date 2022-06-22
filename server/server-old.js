const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const morgan = require('morgan');
const http = require('http');
require('dotenv').config();

// const busLocation = require('./src/routers/busLocation');
const location = require('./src/routers/location');
const { port } = require('./config');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(function (req, res, next) {
  res.io = io;
  next();
});

// app.use('/api/v1/', busLocation);
app.use('/api/v1/', location);

server.listen(port, () => console.log(`Server is running on PORT ${port}`));

// db
require('./src/db/mongodb');

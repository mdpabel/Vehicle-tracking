function socketServer(io) {
  return io.on('connection', (socket) => {
    socket.on('gpsdata', (data) => {
      console.log(data);
      io.emit('gpsdataforclients', JSON.stringify(data));
    });
  });
}

function socketDebugger(io) {
  return io.on('connect_error', (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
}

module.exports = { socketServer, socketDebugger };

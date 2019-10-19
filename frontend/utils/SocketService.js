import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:5000/socket.io/socket.io.js');function subscribeToTimer(cb) {
  socket.on('boardCastTimeForTimer', timestamp => cb(null, timestamp));
  socket.emit('boardCastTimeForTimer', 7200);
}

export { subscribeToTimer };
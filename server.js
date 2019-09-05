'use strict';

const server = require('socket.io')(3009);

/**
 *  Log event handler
 *  @param message
 */
server.on('connection', socket => {
  console.log('CONNECTION', socket.id);

  // Here, you define all the messages the connection will respond to
  socket.on('file-save', message => {
    server.emit('file-save', message)
  });

  socket.on('file-error', message => {
    server.broadcast.emit('file-error', message)
  });
});

console.log('Server is up on port 3009');
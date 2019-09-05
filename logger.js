'use strict';

const socketIo = require('socket.io-client');
const socket = socketIo.connect('http://localhost:3009');

/**
 * Log event handler
 * @param payload
 */
socket.on('file-save', payload => {
  console.log(payload);
})

socket.on('file-error', payload => {
  console.log(payload);
})
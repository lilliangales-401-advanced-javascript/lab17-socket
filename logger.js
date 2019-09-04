'use strict';

const events = require('./events.js');

events.on('log', message => log('log', message));

/**
 * Log event handler
 * @param event
 * @param message
 */
function log(event, message){
  console.log(message);
}
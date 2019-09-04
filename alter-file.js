'use strict';

const events = require('./events.js');

/**
 * Alter text file to uppercase
 * @param text
 */
const textToUppercase = (text) => {
  let textToUppercase = text.toString().toUpperCase();
  events.emit('writeFile', textToUppercase)
}

events.on('convertFile', textToUppercase)
'use strict';

const fs = require('fs');
const events = require('./events.js');
const {promisify} = require('util');
const readFileAsync = promisify(fs.readFile);
let file = process.argv.slice(2).shift();
require('./logger');


events.on('readFile', readFileAsync);


/**
 * Read file asynchronously
 * * @param file
 * @returns {Promise<void>}
 */
readFileAsync (file, {encoding: 'utf8'})
  .then((text) => {
    events.emit('log', text);
    events.emit('convertFile', text);
  })
  .catch((err) => {
    events.emit('log', 'error');
  });
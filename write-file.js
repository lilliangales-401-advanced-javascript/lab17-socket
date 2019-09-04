'use strict';

const events = require('./events.js');
const fs = require('fs');
let file = process.argv.slice(2).shift();
require('./logger')

/**
 * Write file asynchronously
 * @param text
 * @returns {Promise<void>}
 */
const writeFileAsync = async (text) => {
  await fs.writeFile( file, Buffer.from(text), (err, data) => {
    if(err) { events.emit('log', 'error');}
    events.emit('log', `${file} saved`);
  });
};

events.on('writeFile', writeFileAsync)

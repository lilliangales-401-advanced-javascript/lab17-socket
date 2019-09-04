'use strict';

const fs = require('fs');
const events = require('./events.js');
const {promisify} = require('util');
// const readFileAsync = promisify(fs.readFile);
let file = process.argv.slice(2).shift();

require('./read-file');
require('./alter-file');
require('./write-file');

const alterFile = (file) => {
  events.emit('readFile', file)
};


alterFile(file);

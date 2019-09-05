'use strict';

const fs = require('fs');
const socketIo = require('socket.io-client');
const socket = socketIo.connect('http://localhost:3009');
let file = process.argv.slice(2).shift();
const util = require('util')
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/**
 * Convert buffer to uppercase string
 * @param buffer
 */
function convertBuffer(buffer) {
  return Buffer.from(buffer.toString().trim().toUpperCase());
}

// const textToUppercase = (text, file) => {
//   let textToUppercase = text.toString().toUpperCase();
//   console.log(textToUppercase);
//   // writeFile(file, textToUppercase);
// }

function alterFile(file) {
  return readFile(file)
    .then(contents => {
      console.log(contents, 'contents');
      return convertBuffer(contents);
    })
    .then(buffer => {
      console.log(buffer, 'buffer');
      return writeFile(file, buffer);
    })
    .then(() => socket.emit('file-save', 'file saved'))
    .catch(error => {
      socket.emit('file-error', 'data error')
    });
}

alterFile(file)

// /**
//  * Read file asynchronously
//  * * @param file
//  * @returns {Promise<void>}
//  */
//
// const readFileAsync = async (file) => {
//   await fs.readFile(file, (err, data) => {
//     console.log(file, data.toString())
//     textToUppercase(data, file);
//     if(err) { socket.emit('file-error', 'error');}
//   });
// };
//
// /**
//  * Alter text file to uppercase
//  * @param text
//  */
//
// const textToUppercase = (text, file) => {
//   let textToUppercase = text.toString().toUpperCase();
//   console.log(textToUppercase);
//   // writeFile(file, textToUppercase);
// }
//
// /**
//  * Write file asynchronously
//  * @param text
//  * @returns {Promise<void>}
//  */
// const writeFileAsync = async (text, file) => {
//     await fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { socket.emit('file-error', 'error');}
//       console.log('file saved', file)
//       socket.emit('file-save', `${file} saved`);
//     });
//   };
//
// readFileAsync(file);



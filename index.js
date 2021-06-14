'use strict';
// your entry point

require('dotenv').config();
const server = require('./server.js');

// What is Node?
//    our runtime environment

// very differentt from the browser environment

// Browser => innerHTML
//  create a table
//  create classes that calculate values => output as a table.
//  making http requests

// Node !=> innerHTML
//   access your computers file system.
//   see what activity is occuring on your computer.

// console.log(process);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log('Server is running'));

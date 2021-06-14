'use strict';
// your entry point

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

server.listen(3000, () => console.log('Server is running'));

'use strict';

// import a dependency (code we did not write).
const express = require('express');
const Person = require('./Person.js');

const app = express();

app.get('/', (req, res) => {
  // res.send('thanks');
  res.send({"message": "thanks"});
});

app.get('/data', (req, res) => {
  // should respond with a 'Person"
  res.send(new Person('Jacob', 31));
});

module.exports = app;

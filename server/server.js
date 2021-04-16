const express = require('express');
const cors = require("cors");
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const port = process.env.PORT || 5000;
require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());

console.log(__dirname)
app.use(favicon(path.join(__dirname, "..", "client", 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, "..", "client", 'build')));

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, "..", "client", 'build', 'index.html'));
  });
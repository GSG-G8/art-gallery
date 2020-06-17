const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

app.disabled('x-powered-by');
const middleware = [
  compression(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: false }),
];

app.use(middleware);

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.set('port', process.env.PORT || 5000);

module.exports = app;

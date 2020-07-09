require('dotenv').config();
const express = require('express');
const { parse } = require('express-form-data'); // to parse request files (req.files)
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { join } = require('path');
const routes = require('./routes');

const { error } = require('./controllers');

const app = express();

app.disabled('x-powered-by');

app.set('port', process.env.PORT || 5000);

const middleware = [
  compression(),
  parse(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: false }),
  express.static(join(__dirname, '..', 'client', 'build')),
];

app.use(middleware);

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/v1', routes);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(error);

module.exports = app;

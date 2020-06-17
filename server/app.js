const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.disabled('x-powered-by');
app.use(cookieParser());
app.use(express.json());
app.use(compression());
app.set('port', process.env.PORT || 5000);

module.exports = app;

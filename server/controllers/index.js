const error = require('./errorHandlers');
const getPaintings = require('./getPaintings');
const cart = require('./cart');

const auth = require('./auth');

module.exports = { error, getPaintings, auth, cart };

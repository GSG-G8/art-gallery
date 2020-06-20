const error = require('./errorHandlers');
const getPaintings = require('./getPaintings');
const getArtistPaints = require('./getArtistPaints');
const cart = require('./cart');
const auth = require('./auth');

module.exports = { error, getPaintings, getArtistPaints, auth, cart };

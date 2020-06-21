const error = require('./errorHandlers');
const getPaintings = require('./getPaintings');
const getArtistPaints = require('./getArtistPaints');
const auth = require('./auth');
const { getCart } = require('./Cart');

module.exports = { getPaintings, getArtistPaints, auth, error, getCart };

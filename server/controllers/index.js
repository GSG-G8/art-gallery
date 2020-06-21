const error = require('./errorHandlers');
const { getPaintings, getArtistPaints } = require('./Paintings');
const { postCart } = require('./Cart');

const auth = require('./auth');

module.exports = { error, getPaintings, postCart, getArtistPaints, auth };

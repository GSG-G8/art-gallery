const error = require('./errorHandlers');
const { getArtistPaints, getPaintings, addPainting } = require('./paintings');
const auth = require('./auth');

module.exports = { error, getPaintings, auth, addPainting, getArtistPaints };

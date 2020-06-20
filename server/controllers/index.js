const error = require('./errorHandlers');
const getPaintings = require('./getPaintings');
const { addPainting } = require('./addPainting');
const getArtistPaints = require('./getArtistPaints');
const auth = require('./auth');

module.exports = { error, getPaintings, auth, addPainting, getArtistPaints };

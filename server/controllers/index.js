const error = require('./errorHandlers');
const getPaintings = require('./getPaintings');
const getArtistPaints = require('./getArtistPaints');
const auth = require('./auth');

module.exports = { getPaintings, getArtistPaints, auth, error };

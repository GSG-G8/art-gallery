const error = require('./errorHandlers');
const getPaintings = require('./getPaintings');
const getArtist = require('./getArtist');
const getArtistPaints = require('./getArtistPaints');
const auth = require('./auth');

module.exports = { getPaintings, getArtist, getArtistPaints, auth, error };

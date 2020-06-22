const error = require('./errorHandlers');
const getPaintings = require('./getPaintings');
const getArtist = require('./getArtist');
const getArtistPaints = require('./getArtistPaints');
const getAllArtist = require('./getAllArtist');
const activateArtist = require('./activateArtist');
const auth = require('./auth');

module.exports = {
  getPaintings,
  getArtist,
  getArtistPaints,
  getAllArtist,
  activateArtist,
  auth,
  error,
};

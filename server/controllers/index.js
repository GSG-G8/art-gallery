const error = require('./errorHandlers');
const getPaintings = require('./getPaintings');
const deletePainting = require('./deletePainting');
const getArtistPaints = require('./getArtistPaints');
const getArtist = require('./getArtist');
const auth = require('./auth');

module.exports = {
  getPaintings,
  deletePainting,
  getArtistPaints,
  getArtist,
  auth,
  error,
};

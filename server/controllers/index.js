const error = require('./errorHandlers');
const auth = require('./auth');
const { getArtistPaints, getPaintings, addPainting } = require('./paintings');
const { getArtist } = require('./user');

module.exports = {
  error,
  getPaintings,
  auth,
  addPainting,
  getArtistPaints,
  getArtist,
};

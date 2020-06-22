const error = require('./errorHandlers');
const { getPaintings, getArtistPaints } = require('./Paintings');
const { getArtist } = require('./Artist');
const { postCart } = require('./Cart');

const auth = require('./auth');

module.exports = {
  error,
  getPaintings,
  getArtist,
  getArtistPaints,
  postCart,
  auth,
};

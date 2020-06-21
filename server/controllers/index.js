const error = require('./errorHandlers');
const { getPaintings, getArtistPaints } = require('./Paintings');
const { addPaintingToCart } = require('./Cart');
const { getArtist } = require('./Artist');

const auth = require('./auth');

module.exports = {
  error,
  getPaintings,
  addPaintingToCart,
  getArtist,
  getArtistPaints,
  auth,
};

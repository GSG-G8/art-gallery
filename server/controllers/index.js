const error = require('./errorHandlers');
const { getPaintings, getArtistPaints } = require('./Paintings');
const { addPaintingToCart } = require('./Cart');

const auth = require('./auth');

module.exports = {
  error,
  getPaintings,
  addPaintingToCart,
  getArtistPaints,
  auth,
};

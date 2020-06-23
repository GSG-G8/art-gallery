const error = require('./errorHandlers');

const auth = require('./auth');
const { getArtistPaints, getPaintings, addPainting } = require('./paintings');
const { addPaintingToCart, deletePantingCart } = require('./cart');
const { getArtist } = require('./user');

module.exports = {
  error,
  getPaintings,
  addPaintingToCart,
  getArtist,
  getArtistPaints,
  auth,
  addPainting,
  deletePantingCart,
};

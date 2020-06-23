const error = require('./errorHandlers');
const auth = require('./auth');
const { getArtistPaints, getPaintings, addPainting } = require('./paintings');
const { addPaintingToCart, deletePantingCart, getCart } = require('./cart');
const { getArtist } = require('./user');

module.exports = {
  getPaintings,
  getArtistPaints,
  auth,
  error,
  getCart,
  getArtist,
  addPaintingToCart,
  addPainting,
  deletePantingCart,
};

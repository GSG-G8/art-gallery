const error = require('./errorHandlers');
const auth = require('./auth');
const {
  getArtistPaints,
  getPaintings,
  addPainting,
  deletePainting,
} = require('./paintings');
const { addPaintingToCart, deletePantingCart, getCart } = require('./cart');
const { getArtist } = require('./user');

module.exports = {
  getPaintings,
  deletePainting,
  getArtistPaints,
  getArtist,
  auth,
  error,
  getCart,
  addPaintingToCart,
  addPainting,
  deletePantingCart,
};

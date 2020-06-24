const error = require('./errorHandlers');
const auth = require('./auth');
const {
  getArtistPaints,
  getPaintings,
  addPainting,
  deletePainting,
} = require('./paintings');
const { addPaintingToCart, deletePantingCart, getCart } = require('./cart');
const { getArtist, updateArtist } = require('./Artist');

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
  updateArtist,
  deletePantingCart,
};

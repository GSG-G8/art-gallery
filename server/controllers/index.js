const error = require('./errorHandlers');
const auth = require('./auth');
const {
  getArtistPaints,
  getPaintings,
  addPainting,
  deletePainting,
} = require('./paintings');
const { addPaintingToCart, deletePantingCart, getCart } = require('./cart');
const { getArtist, getUserProfile } = require('./user');

module.exports = {
  getPaintings,
  getArtistPaints,
  auth,
  error,
  getUserProfile,
  deletePainting,
  getArtist,
  getCart,
  addPaintingToCart,
  addPainting,
  deletePantingCart,
};

const error = require('./errorHandlers');
const auth = require('./auth');
const {
  getArtistPaints,
  getPaintings,
  addPainting,
  deletePainting,
} = require('./paintings');
const { addPaintingToCart, deletePantingCart, getCart } = require('./cart');
const {
  getArtist,
  getAllArtist,
  activateArtist,
  updateUserInfo,
} = require('./user');

module.exports = {
  getPaintings,
  getArtist,
  getArtistPaints,
  getAllArtist,
  activateArtist,
  auth,
  error,
  deletePainting,
  getCart,
  addPaintingToCart,
  addPainting,
  deletePantingCart,
  updateUserInfo,
};

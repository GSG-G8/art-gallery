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
  getUserProfile,
} = require('./user');
const { addReview, getArtistReview } = require('./review');

module.exports = {
  getPaintings,
  getArtistPaints,
  auth,
  error,
  getUserProfile,
  deletePainting,
  getArtist,
  getAllArtist,
  activateArtist,
  getCart,
  addPaintingToCart,
  addPainting,
  deletePantingCart,
  updateUserInfo,
  addReview,
  getArtistReview,
};

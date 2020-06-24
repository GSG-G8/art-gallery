const error = require('./errorHandlers');
const auth = require('./auth');

const {
  getArtistPaints,
  getPaintings,
  addPainting,
  deletePainting,
} = require('./paintings');

const { addPaintingToCart, deletePantingCart, getCart } = require('./cart');
const { addReview, getArtistReview } = require('./review');

const {
  getAllArtist,
  activateArtist,
  getUserProfile,
  getArtist,
  updateArtist,
} = require('./user');

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
  updateArtist,
  deletePantingCart,
  addReview,
  getArtistReview,
};

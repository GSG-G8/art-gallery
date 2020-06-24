const error = require('./errorHandlers');
const {
  getPaintings,
  getArtistPaints,
  addPainting,
  buyPaintings,
  deletePainting,
} = require('./paintings');

const auth = require('./auth');
const { addPaintingToCart, deletePantingCart, getCart } = require('./cart');
const { getArtist, getAllArtist, activateArtist } = require('./user');

module.exports = {
  getPaintings,
  getArtist,
  getArtistPaints,
  buyPaintings,
  getAllArtist,
  activateArtist,
  auth,
  error,
  deletePainting,
  getCart,
  addPaintingToCart,
  addPainting,
  deletePantingCart,
};

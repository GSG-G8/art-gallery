const error = require('./errorHandlers');
const auth = require('./auth');
const { getArtistPaints, getPaintings, addPainting } = require('./paintings');
const { addPaintingToCart } = require('./Cart');
const { getArtist } = require('./user');
const { updateArtist } = require('./Artist');

module.exports = {
  error,
  getPaintings,
  addPaintingToCart,
  getArtist,
  getArtistPaints,
  auth,
  addPainting,
  updateArtist,
};

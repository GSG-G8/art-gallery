const error = require('./errorHandlers');
const {
  getPaintings,
  getArtistPaints,
  addPainting,
  buyPaintings,
} = require('./paintings');

const auth = require('./auth');
const { addPaintingToCart } = require('./Cart');
const { getArtist } = require('./user');

module.exports = {
  error,
  getPaintings,
  getArtist,
  getArtistPaints,
  buyPaintings,
  auth,
  addPaintingToCart,
  addPainting,
};

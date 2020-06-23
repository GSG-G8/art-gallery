const getPaintingsQuery = require('./getPaintingsQuery');
const addPaintingQuery = require('./addPainting');
const getArtistPaintsQuery = require('./getArtistPaintsQuery');
const { getPaintingPrice, getCustomerBudget } = require('./buyPaintings');

module.exports = {
  getPaintingsQuery,
  getArtistPaintsQuery,
  getPaintingPrice,
  getCustomerBudget,
  addPaintingQuery,
};

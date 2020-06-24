const getPaintingsQuery = require('./getPaintingsQuery');
const addPaintingQuery = require('./addPainting');
const getArtistPaintsQuery = require('./getArtistPaintsQuery');
const {
  getPaintingPrice,
  getCustomerBudget,
  updateBudgets,
} = require('./buyPaintings');

module.exports = {
  getPaintingsQuery,
  getArtistPaintsQuery,
  getPaintingPrice,
  getCustomerBudget,
  addPaintingQuery,
  updateBudgets,
};

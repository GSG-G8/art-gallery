const getPaintingsQuery = require('./getPaintingsQuery');
const getPaintingsForUser = require('./getPaintingsUser');
const addPaintingQuery = require('./addPainting');
const getArtistPaintsQuery = require('./getArtistPaintsQuery');
const {
  getPaintingPrice,
  getCustomerBudget,
  updateBudgets,
} = require('./buyPaintings');
const deletePaintingsQuery = require('./deletePaintingsQuery');
const getPaintingCategory = require('./getPaintingCategory');
const getPaintQuery = require('./getPaintingInfoQ');

module.exports = {
  getPaintingsQuery,
  getPaintingsForUser,
  getArtistPaintsQuery,
  getPaintingPrice,
  getCustomerBudget,
  deletePaintingsQuery,
  getPaintingCategory,
  addPaintingQuery,
  updateBudgets,
  getPaintQuery,
};

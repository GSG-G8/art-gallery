const getPaintingsQuery = require('./getPaintingsQuery');
const getArtistPaintsQuery = require('./getArtistPaintsQuery');
const {
  getPaintingPrice,
  getCustomerBudget,
} = require('./getArtistPaintsQuery');

module.exports = {
  getPaintingsQuery,
  getArtistPaintsQuery,
  getPaintingPrice,
  getCustomerBudget,
};

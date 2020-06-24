const {
  getPaintingsQuery,
  getArtistPaintsQuery,
  getPaintingPrice,
  getCustomerBudget,
  addPaintingQuery,
  updateBudgets,
} = require('./Paintings');
const { checkCartQuery, postCartQuery } = require('./Cart');
const { addArtist, getArtistByEmail, getArtistQuery } = require('./artists');
const { addCustomer, checkCustomerEmail } = require('./customers');

module.exports = {
  getPaintingsQuery,
  checkCartQuery,
  postCartQuery,
  getArtistPaintsQuery,
  addPaintingQuery,
  addArtist,
  getArtistByEmail,
  addCustomer,
  checkCustomerEmail,
  getArtistQuery,
  getPaintingPrice,
  getCustomerBudget,
  updateBudgets,
};

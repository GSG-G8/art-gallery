const { getPaintingsQuery, getArtistPaintsQuery } = require('./Paintings');
const { addArtist, getArtistByEmail } = require('./artists');
const { addCustomer, checkCustomerEmail } = require('./customers');
const { getCustomerCarts } = require('./Cart');

module.exports = {
  getPaintingsQuery,
  getArtistPaintsQuery,
  addArtist,
  getArtistByEmail,
  addCustomer,
  checkCustomerEmail,
  getCustomerCarts,
};

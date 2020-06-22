const { addArtist, getArtistByEmail, getArtistQuery } = require('./artists');
const { getPaintingsQuery, getArtistPaintsQuery } = require('./Paintings');
const { addCustomer, checkCustomerEmail } = require('./customers');
const { getCustomerCarts } = require('./Cart');

module.exports = {
  getPaintingsQuery,
  getArtistPaintsQuery,
  addArtist,
  getArtistByEmail,
  getArtistQuery,
  addCustomer,
  checkCustomerEmail,
  getCustomerCarts,
};

const { getPaintingsQuery } = require('./Paintings');
const { addArtist, getArtistByEmail } = require('./artists');
const { addCustomer, checkCustomerEmail } = require('./customers');

module.exports = {
  getPaintingsQuery,
  addArtist,
  getArtistByEmail,
  addCustomer,
  checkCustomerEmail,
};

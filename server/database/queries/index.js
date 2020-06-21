const { getPaintingsQuery, getArtistPaintsQuery } = require('./Paintings');
const { addArtist, getArtistByEmail, getArtistQuery } = require('./artists');
const { addCustomer, checkCustomerEmail } = require('./customers');

module.exports = {
  getPaintingsQuery,
  getArtistPaintsQuery,
  addArtist,
  getArtistByEmail,
  addCustomer,
  checkCustomerEmail,
  getArtistQuery,
};

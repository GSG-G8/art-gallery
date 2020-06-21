const { getPaintingsQuery, getArtistPaintsQuery } = require('./Paintings');
const { checkCartQuery, postCartQuery } = require('./Cart');
const { addArtist, getArtistByEmail, getArtistQuery } = require('./artists');
const { addCustomer, checkCustomerEmail } = require('./customers');

module.exports = {
  getPaintingsQuery,
  checkCartQuery,
  postCartQuery,
  getArtistPaintsQuery,
  addArtist,
  getArtistByEmail,
  addCustomer,
  checkCustomerEmail,
  getArtistQuery,
};

const {
  getPaintingsQuery,
  getArtistPaintsQuery,
  getPaintingCategory,
} = require('./Paintings');
const { addArtist, getArtistByEmail } = require('./artists');
const { addCustomer, checkCustomerEmail } = require('./customers');

module.exports = {
  getPaintingsQuery,
  getArtistPaintsQuery,
  addArtist,
  getArtistByEmail,
  addCustomer,
  checkCustomerEmail,
  getPaintingCategory,
};

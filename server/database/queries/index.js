const {
  getPaintingsQuery,
  getArtistPaintsQuery,
  addPaintingQuery,
} = require('./Paintings');
const { addArtist, getArtistByEmail, getArtistQuery } = require('./artists');
const { addCustomer, checkCustomerEmail } = require('./customers');

module.exports = {
  getPaintingsQuery,
  getArtistPaintsQuery,
  addPaintingQuery,
  addArtist,
  getArtistByEmail,
  addCustomer,
  checkCustomerEmail,
  getArtistQuery,
};

const { getPaintingsQuery, getArtistPaintsQuery } = require('./Paintings');
const {
  addArtist,
  getArtistByEmail,
  getArtistQuery,
  getArtists,
} = require('./artists');
const { addCustomer, checkCustomerEmail } = require('./customers');
const { getAdminEmail } = require('./admin');
const { switchActivateArtist } = require('./artists');

module.exports = {
  getPaintingsQuery,
  getArtistPaintsQuery,
  addArtist,
  getArtistByEmail,
  addCustomer,
  checkCustomerEmail,
  getArtistQuery,
  getAdminEmail,
  getArtists,
  switchActivateArtist,
};

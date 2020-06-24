const addArtist = require('./addArtist');
const getArtistByEmail = require('./checkArtistExist');
const getArtistQuery = require('./getArtistQuery');
const getArtists = require('./getAllArtist');
const switchActivateArtist = require('./switchActivateArtist');

module.exports = {
  addArtist,
  getArtistByEmail,
  getArtistQuery,
  getArtists,
  switchActivateArtist,
};

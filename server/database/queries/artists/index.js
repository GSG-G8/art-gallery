const addArtist = require('./addArtist');
const getArtistByEmail = require('./checkArtistExist');
const getArtistQuery = require('./getArtistQuery');
const getArtists = require('./getAllArtist');
const switchActivateArtist = require('./switchActivateArtist');
const updateAvatarQuery = require('./updateAvatarQuery');

module.exports = {
  addArtist,
  getArtistByEmail,
  getArtistQuery,
  getArtists,
  switchActivateArtist,
  updateAvatarQuery,
};

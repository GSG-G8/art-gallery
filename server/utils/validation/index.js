const registerSchema = require('./registerSchema');
const loginSchema = require('./loginSchema');
const addPaintingSchema = require('./addPaintingSchema');
const updateArtistSchema = require('./updateArtistSchema');
const addReviewSchema = require('./addReviewSchema');

module.exports = {
  loginSchema,
  addPaintingSchema,
  registerSchema,
  updateArtistSchema,
  addReviewSchema,
};

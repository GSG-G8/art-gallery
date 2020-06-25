const registerSchema = require('./registerSchema');
const loginSchema = require('./loginSchema');
const addPaintingSchema = require('./addPaintingSchema');
const updateArtistSchema = require('./updateArtistSchema');
const buyPaintingsSchema = require('./buyPaintingsSchema');
const updateSchema = require('./updateSchema');
const addReviewSchema = require('./addReviewSchema');

module.exports = {
  loginSchema,
  addPaintingSchema,
  registerSchema,
  updateArtistSchema,
  buyPaintingsSchema,
  updateSchema,
  addReviewSchema,
};

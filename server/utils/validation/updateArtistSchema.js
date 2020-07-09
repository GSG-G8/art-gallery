const { object, string, array, boolean } = require('yup');

const updateArtistSchema = object({
  socialMediaAccounts: array(),
  mobileNo: string(),
  customized: boolean(),
});

module.exports = updateArtistSchema;

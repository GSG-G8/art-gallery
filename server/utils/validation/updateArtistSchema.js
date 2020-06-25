const { object, string, array, boolean } = require('yup');

const updateArtistSchema = object({
  socialMediaAccounts: array().of(string().url()).required(),
  bio: string().required(),
  mobileNo: string().required(),
  customized: boolean().required(),
});

module.exports = updateArtistSchema;

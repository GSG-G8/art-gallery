const { object, string, array } = require('yup');

const updateArtistSchema = object({
  socialMediaAccounts: array().required(),
  bio: string().required(),
  mobileNo: string().required(),
  customized: string().required(),
});

module.exports = updateArtistSchema;

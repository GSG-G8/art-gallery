const yup = require('yup');

const updateArtistSchema = yup.object({
  socialMediaAccounts: yup.array().required(),
  bio: yup.string().required(),
  mobileNo: yup.string().required(),
  customized: yup.string().required(),
});

module.exports = updateArtistSchema;

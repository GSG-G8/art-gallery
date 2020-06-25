const { object } = require('yup');

const updateArtistAvatarSchema = object({
  profileImg: object()
    .test('type', 'Should be an image png or jpeg', (value) => {
      return ['image/png', 'image/jpeg'].includes(value.type);
    })
    .required(),
});

module.exports = updateArtistAvatarSchema;

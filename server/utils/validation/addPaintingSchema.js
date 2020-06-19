const yup = require('yup');

const addPaintingSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  category: yup.string().required(),
  property: yup.string().required(),
  paintingImg: yup
    .object()
    .test('type', 'Should be an image png or jpeg', (value) => {
      return ['image/png', 'image/jpeg'].includes(value.type);
    })
    .required(),
});

module.exports = addPaintingSchema;

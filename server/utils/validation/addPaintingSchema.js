const { object, string } = require('yup');

const addPaintingSchema = object({
  title: string().required(),
  description: string().required(),
  category: string().required(),
  property: string().required(),
  paintingImg: object()
    .test('type', 'Should be an image png or jpeg', (value) => {
      return ['image/png', 'image/jpeg'].includes(value.type);
    })
    .required(),
});

module.exports = addPaintingSchema;

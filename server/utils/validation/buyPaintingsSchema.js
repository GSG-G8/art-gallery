const { object, string } = require('yup');

const buyPaintingsSchema = object({
  customerId: string().required(),
  paintingId: string().required(),
  property: string().required(),
});

module.exports = buyPaintingsSchema;

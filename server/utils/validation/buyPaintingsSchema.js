const { object, number, string } = require('yup');

const buyPaintingsSchema = object({
  customerId: number().positive().required(),
  paintingId: number().positive().required(),
  property: string().required(),
});

module.exports = buyPaintingsSchema;

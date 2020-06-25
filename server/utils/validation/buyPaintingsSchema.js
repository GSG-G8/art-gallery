const { object, number, string } = require('yup');

const buyPaintingsSchema = object({
  paintingId: number().positive().required(),
  property: string().required(),
});

module.exports = buyPaintingsSchema;

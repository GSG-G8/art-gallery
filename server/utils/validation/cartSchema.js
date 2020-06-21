const { object, number } = require('yup');

const cartSchema = object({
  customerId: number().positive().required(),
  paintingId: number().positive().required(),
});

module.exports = cartSchema;

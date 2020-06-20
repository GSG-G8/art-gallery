const yup = require('yup');

const cartSchema = yup.object({
  customerId: yup.number().positive().required(),
  paintingId: yup.number().positive().required(),
});

module.exports = cartSchema;

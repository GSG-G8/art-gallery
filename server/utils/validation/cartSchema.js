const yup = require('yup');

const cartSchema = yup.object({
  customer_id: yup.number().positive().required(),
  painting_id: yup.number().positive().required(),
});

module.exports = cartSchema;

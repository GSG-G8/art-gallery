const yup = require('yup');

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  role: yup.string().required(),
});

module.exports = loginSchema;

const { object, string } = require('yup');

const loginSchema = object({
  email: string().email().required(),
  password: string().min(8).required(),
  role: string().oneOf(['artist', 'customer', 'admin']).required(),
});

module.exports = loginSchema;

const yup = require('yup');

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  role: yup.string().oneOf(['artist', 'user']).required(),
});

module.exports = loginSchema;

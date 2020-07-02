const { object, string, ref, boolean } = require('yup');

const registerSchema = object({
  email: string().email().required(),
  password: string().min(8).required(),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required(),
  firstName: string().min(2).max(20).required(),
  lastName: string().min(2).max(20).required(),
  role: string().oneOf(['artist', 'customer']).required(),
  customized: boolean(),
});

module.exports = registerSchema;

const { object, string, ref } = require('yup');

const registerSchema = object({
  email: string().email().required(),
  password: string().min(8).required(),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required(),
  firstName: string().min(3).required(),
  lastName: string().min(3).required(),
  role: string().required(),
});

module.exports = registerSchema;

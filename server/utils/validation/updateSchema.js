const { object, string, number } = require('yup');

const updateSchema = object({
  firstName: string().min(3).required(),
  lastName: string().min(3).required(),
  budget: number().min(1).required(),
});

module.exports = updateSchema;

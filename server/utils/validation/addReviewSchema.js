const { object, string, number } = require('yup');

const addReviewSchema = object({
  details: string().required(),
  artistID: number().required(),
  rate: number().min(0).max(5).required(),
});

module.exports = addReviewSchema;

const { addReviewSchema } = require('../utils/validation');

exports.addReview = async (req, res, next) => {
  try {
    const { details, rate, artistID } = req.body;
    const result = await addReviewSchema.validate(
      { details, rate, artistID },
      { abortEarly: false },
    );
    console.log('hi ', result);
  } catch (err) {
    next(err);
  }
};

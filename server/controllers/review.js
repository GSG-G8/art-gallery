const { addReviewSchema } = require('../utils/validation');
const { addReview } = require('../database/queries');

exports.addReview = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { details, rate, artistID } = req.body;
    if (Number.isInteger(rate)) {
      await addReviewSchema.validate(
        { details, rate, artistID },
        { abortEarly: false },
      );

      const { rows } = await addReview(artistID, id, rate, details);
      res.status(201).json({
        StatusCode: 201,
        data: { rows },
        message: 'review added successfully',
      });
    } else {
      res
        .status(400)
        .json({ statusCode: 400, message: 'rate should be integer' });
    }
  } catch (err) {
    if (err.errors) {
      res.status(400).json({
        status: 400,
        message: err.errors,
      });
    } else {
      next(err);
    }
  }
};

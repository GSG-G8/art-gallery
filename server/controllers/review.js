const { addReviewSchema } = require('../utils/validation');
const {
  addReview,
  getArtistReviews,
  getArtistQuery,
} = require('../database/queries');

exports.addReview = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { details, rate, artistID } = req.body;

    if (rate % 1 === 0) {
      await addReviewSchema.validate(
        { details, rate, artistID },
        { abortEarly: false },
      );
      const { rows: artistRow } = await getArtistQuery(artistID);
      if (artistRow.length > 0) {
        const { rows } = await addReview(artistID, id, rate, details);
        res.status(201).json({
          StatusCode: 201,
          data: { rows },
          message: 'review added successfully',
        });
      } else {
        res
          .status(400)
          .json({ statusCode: 400, message: 'NO ARTIST FOR THIS ID' });
      }
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

exports.getArtistReview = async (req, res, next) => {
  try {
    const { artistID } = req.params;
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(artistID)) {
      const { rows: data } = await getArtistReviews(artistID);
      if (data.length > 0) {
        res.json({ statusCode: 200, data });
      } else {
        res.json({ statusCode: 200, data: [] });
      }
    } else {
      res
        .status(400)
        .json({ statusCode: 400, message: 'Artist ID should be number' });
    }
  } catch (err) {
    next(err);
  }
};

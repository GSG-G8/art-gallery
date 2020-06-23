const { getArtistReviews } = require('../database/queries');

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

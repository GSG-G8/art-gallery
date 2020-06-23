exports.getArtistReview = async (req, res, next) => {
  try {
    const { artistID } = req.params;
  } catch (err) {
    next(err);
  }
};

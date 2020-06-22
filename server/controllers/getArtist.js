const { getArtistQuery } = require('../database/queries');

const getArtist = async (req, res, next) => {
  try {
    const {
      params: { artistId },
    } = req;
    if (artistId && artistId > 0) {
      const { rows: data } = await getArtistQuery(artistId);
      if (data.length !== 0) {
        res.json({ statusCode: 200, data });
      } else {
        res.status(404).json({
          statusCode: 404,
          message: "Sorry There's no artist for this id",
        });
      }
    } else {
      res.status(400).json({
        statusCode: 400,
        message: 'You entered wrong artist ID',
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = getArtist;

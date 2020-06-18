const { getArtistQuery } = require('../database/queries');

const getArtist = async (req, res, next) => {
  try {
    const { artistId } = req.params;
    if (artistId > 0) {
      const { rows } = await getArtistQuery(artistId);
      const data = { ...rows[0] };
      if (data.id) {
        res.json({ statusCode: 200, data });
      } else {
        res.status(404).json({
          statusCode: 404,
          message: "Sorry There's no artist for this id",
        });
      }
    } else {
      res.status(404).json({
        statusCode: 404,
        message: 'You enterd wrong artist ID',
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = getArtist;

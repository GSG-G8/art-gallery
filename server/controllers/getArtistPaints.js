const { getArtistPaintsQuery } = require('../database/queries');

const getArtistPaints = async (req, res, next) => {
  try {
    const { artistId } = req.params;
    if (artistId > 0) {
      const { rows } = await getArtistPaintsQuery(artistId);
      if (rows.length !== 0) {
        res.json({ statusCode: 200, data: rows });
      } else {
        res.status(404).json({
          statusCode: 404,
          message: "Sorry There's no paintings for this artist",
        });
      }
    } else {
      res.status(400).json({
        statusCode: 400,
        message: 'You enterd wrong artist ID',
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = getArtistPaints;

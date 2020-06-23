const { deletePaintingsQuery } = require('../../database/queries/index');

const deletePainting = async (req, res, next) => {
  try {
    const {
      params: { id: paintingId },
      user: { id: artistId },
    } = req;
    const check = await deletePaintingsQuery(paintingId, artistId);
    if (check.rowCount !== 0) {
      res.status(200).json({
        statusCode: 200,
        message: 'Painting deleted successfully',
      });
    } else {
      res.status(400).json({
        statusCode: 400,
        message: "Painting does not exist or you don't has permission",
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = deletePainting;

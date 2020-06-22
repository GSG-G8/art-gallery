const { deletePaintingsQuery } = require('../database/queries');

const deletePainting = async (req, res, next) => {
  try {
    const { id: paintingId } = req.params;
    const check = await deletePaintingsQuery(paintingId);
    if (check.rowCount !== 0) {
      res.status(200).json({
        statusCode: 200,
        message: 'Painting deleted successfully',
      });
    } else {
      res.status(400).json({
        statusCode: 400,
        message: 'Painting does not exist',
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = deletePainting;

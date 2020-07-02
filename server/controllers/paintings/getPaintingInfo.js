const { getPaintQuery } = require('../../database/queries');

const getPaintingInfo = async (req, res, next) => {
  const {
    params: { paintingId },
  } = req;
  try {
    if (paintingId > 0) {
      const { rows } = await getPaintQuery(paintingId);
      if (rows[0]) {
        res.status(200).json({ statusCode: 200, data: rows[0] });
      } else {
        res
          .status(400)
          .json({ statusCode: 400, message: 'no painting for this id' });
      }
    } else {
      res.status(400).json({ statusCode: 400, message: 'invalid id' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getPaintingInfo;

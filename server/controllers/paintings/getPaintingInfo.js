const { getPaintQuery } = require('../../database/queries');

const getPaintingInfo = async (req, res, next) => {
  const {
    params: { paintingId },
  } = req;
  try {
    const { rows } = await getPaintQuery(paintingId);
    res.status(200).json({ statusCode: 200, data: rows[0] });
  } catch (error) {
    next(error);
  }
};

module.exports = getPaintingInfo;

const { getPaintingsQuery } = require('../../database/queries');

const getPaintings = async (req, res, next) => {
  try {
    const { rows } = await getPaintingsQuery();
    res.json({ statusCode: 200, data: rows });
  } catch (err) {
    next(err);
  }
};

module.exports = getPaintings;

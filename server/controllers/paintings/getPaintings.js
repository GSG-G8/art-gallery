const {
  getPaintingsQuery,
  getPaintingCategory,
} = require('../../database/queries');

const getPaintings = async (req, res, next) => {
  const {
    params: { category },
  } = req;
  try {
    let data;
    if (category === 'all') {
      const { rows } = await getPaintingsQuery();
      data = rows;
    } else {
      const { rows } = await getPaintingCategory(category);
      data = rows;
    }
    res.json({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};

module.exports = getPaintings;

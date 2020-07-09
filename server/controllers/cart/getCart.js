const { getCustomerCarts } = require('../../database/queries');

exports.getCart = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows: data } = await getCustomerCarts(id);
    if (data) {
      res.json({ statusCode: 200, data });
    }
  } catch (err) {
    next(err);
  }
};

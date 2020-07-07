const { getCustomerCarts } = require('../../database/queries');

exports.getCart = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows: data } = await getCustomerCarts(id);
    if (data.length > 0) {
      res.json({ statusCode: 200, data });
    } else {
      res.status(200).json({
        statusCode: 200,
        message: "You don't have products at you cart",
      });
    }
  } catch (err) {
    next(err);
  }
};

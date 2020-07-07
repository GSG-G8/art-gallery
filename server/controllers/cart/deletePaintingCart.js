const { deletePaintingFromCart } = require('../../database/queries');

const deletePantingCart = async (req, res, next) => {
  const {
    params: { paintingsId },
    user: { id: customerId },
  } = req;
  try {
    const { rows } = await deletePaintingFromCart(customerId, paintingsId);
    if (rows.length) {
      res.status(200).json({
        statusCode: 200,
        message: `your order deleted!!`,
      });
    } else {
      res.status(400).json({
        statusCode: 400,
        message: "you don't have this painting on your cart!",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = deletePantingCart;

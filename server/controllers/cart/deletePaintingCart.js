const {
  getPaintingsForUser,
  deletePaintingFromCart,
} = require('../../database/queries');

const deletePantingCart = async (req, res, next) => {
  const {
    params: { paintingsId },
    user: { id: customerId },
  } = req;
  try {
    const { rows } = await getPaintingsForUser(customerId, paintingsId);
    if (rows[0]) {
      const { rows: info } = await deletePaintingFromCart(
        customerId,
        paintingsId,
      );
      const { id } = info[0];
      res.json({
        statusCode: 200,
        message: `your order with id ${id} deleted!!`,
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

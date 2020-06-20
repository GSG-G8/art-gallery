const jwt = require('jsonwebtoken');

const {
  getPaintingsForUser,
  deletePaintingFromCart,
} = require('../../database/queries');

const deletePantingCart = async (req, res, next) => {
  const {
    params: { paintingsId },
    cookies: { token },
  } = req;
  const { id: customerId, role } = jwt.decode(token, process.env.SECRET_KEY);
  if (role === 'user') {
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
          message: `you order with id ${id} deleted!!`,
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
  } else {
    res
      .status(403)
      .json({ statusCode: 403, message: 'you cant delete the painting' });
  }
};

module.exports = deletePantingCart;

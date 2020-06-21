const { checkCartQuery, postCartQuery } = require('../../database/queries');
const { cartSchema } = require('../../utils/validation');

const addPaintingToCart = async (req, res, next) => {
  try {
    await cartSchema.validate(req.body, { abortEarly: false });
    const { rows: checkrows } = await checkCartQuery(req.body);
    if (checkrows.length === 0) {
      const { rows } = await postCartQuery(req.body);
      const { customer_id: customerId, painting_id: paintingId } = rows[0];
      res.status(201).json({
        StatusCode: 201,
        data: {
          customerId,
          paintingId,
          message: `Painting with id = ${paintingId} was added successfully`,
        },
      });
    } else {
      const err = { errors: 'Product is already in your cart' };
      throw err;
    }
  } catch (err) {
    if (err.errors) {
      res.status(400).json({ statusCode: 400, data: { message: err.errors } });
    } else if (err.detail) {
      res.status(400).json({
        statusCode: 400,
        data: {
          message: err.detail,
        },
      });
    } else {
      next(err);
    }
  }
};

module.exports = addPaintingToCart;

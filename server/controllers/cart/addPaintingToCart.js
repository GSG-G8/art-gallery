const { checkCartQuery, postCartQuery } = require('../../database/queries');

const addPaintingToCart = async (req, res, next) => {
  try {
    const {
      user: { id: customerId },
      body: { paintingId },
    } = req;
    if (customerId > 0 && paintingId > 0) {
      const { rows } = await checkCartQuery({
        customerId,
        paintingId,
      });
      if (rows.length === 0) {
        await postCartQuery({ customerId, paintingId });
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
    } else {
      const err = { errors: 'Painting Id must be a number' };
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

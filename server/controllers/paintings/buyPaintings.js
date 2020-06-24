const {
  getPaintingPrice,
  // getCustomerBudget,
} = require('../../database/queries');

const { buyPaintingsSchema } = require('../../utils/validation');

const buyPaintings = async (req, res, next) => {
  try {
    const {
      customerId,
      paintingId,
      property,
    } = await buyPaintingsSchema.validate(req.body, { abortEarly: false });
    const { rows } = await getPaintingPrice(paintingId);
    const { property: paintingProprty } = rows[0];
    if (paintingProprty[property]) {
      const paintingPrice = paintingProprty[property];
      res.json({ customerId, paintingId, paintingProprty, paintingPrice });
    } else {
      res.json({
        statusCode: 400,
        message: 'This property is not listed for this product',
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = buyPaintings;

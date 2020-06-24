const {
  getPaintingPrice,
  getCustomerBudget,
} = require('../../database/queries');

const { buyPaintingsSchema } = require('../../utils/validation');

const buyPaintings = async (req, res, next) => {
  try {
    const {
      customerId,
      paintingId,
      property,
    } = await buyPaintingsSchema.validate(req.body, { abortEarly: false });
    const { rows: paintingpriceRows } = await getPaintingPrice(paintingId);
    const { property: paintingProprty } = paintingpriceRows[0];
    if (paintingProprty[property]) {
      const paintingPrice = paintingProprty[property];

      const { rows: customerBudgetRows } = await getCustomerBudget(customerId);
      const { budget: customerBudget } = customerBudgetRows[0];

      if (Number(customerBudget) > Number(paintingPrice)) {
        res.json({
          customerId,
          paintingId,
          paintingProprty,
          paintingPrice,
          customerBudget,
        });
      } else {
        res.json({
          statusCode: 400,
          message: "Sorry You don't have enough money for this operation",
        });
      }
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

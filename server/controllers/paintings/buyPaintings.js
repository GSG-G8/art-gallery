const {
  getPaintingPrice,
  getCustomerBudget,
  updateBudgets,
} = require('../../database/queries');

const { buyPaintingsSchema } = require('../../utils/validation');

const buyPaintings = async (req, res, next) => {
  try {
    const {
      user: { id: customerId },
    } = req;
    const { paintingId, property } = await buyPaintingsSchema.validate(
      req.body,
      { abortEarly: false },
    );
    const { rows: paintingpriceRows } = await getPaintingPrice(paintingId);
    if (paintingpriceRows.length > 0) {
      const {
        property: paintingProprty,
        artist_id: artistId,
      } = paintingpriceRows[0];
      if (paintingProprty[property]) {
        const paintingPrice = paintingProprty[property];

        const { rows: customerBudgetRows } = await getCustomerBudget(
          customerId,
        );
        const { budget: customerBudget } = customerBudgetRows[0];

        if (Number(customerBudget) > Number(paintingPrice)) {
          await updateBudgets(customerId, artistId, paintingId, paintingPrice);
          res.status(200).json({
            statusCode: 200,
            message: `Painting with id = ${paintingId} was added succesfully`,
          });
        } else {
          res.status(400).json({
            statusCode: 400,
            message: "Sorry You don't have enough money for this operation",
          });
        }
      } else {
        res.status(400).json({
          statusCode: 400,
          message: 'This property is not listed for this product',
        });
      }
    } else {
      res.status(400).json({
        statusCode: 400,
        message: "Sorry there's no painting with this ID",
      });
    }
  } catch (err) {
    if (err.errors) {
      res.status(400).json({ statusCode: 400, message: err.errors });
    } else {
      next(err);
    }
  }
};

module.exports = buyPaintings;

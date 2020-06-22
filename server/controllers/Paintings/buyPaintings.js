const buyPaintings = async (req, res, next) => {
  try {
    const {
      body: { customerId, paintingsId },
    } = req;
    const data = JSON.parse(paintingsId);
    res.json({ customerId, paintingId: data });
  } catch (err) {
    next(err);
  }
};

module.exports = buyPaintings;

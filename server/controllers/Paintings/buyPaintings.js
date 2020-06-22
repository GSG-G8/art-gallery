const buyPaintings = async (req, res, next) => {
  try {
    const {
      body: { customerId, paintingId },
    } = req;
    const data = JSON.parse(paintingId);
    res.json({ customerId, paintingId: data });
  } catch (err) {
    next(err);
  }
};

module.exports = buyPaintings;

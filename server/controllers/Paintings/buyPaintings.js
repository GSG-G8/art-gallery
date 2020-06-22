const buyPaintings = async (req, res, next) => {
  try {
    res.json(req.body);
  } catch (err) {
    next(err);
  }
};

module.exports = buyPaintings;

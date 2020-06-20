const { addPaintingSchema } = require('../utils/validation');

exports.addPainting = async (req, res, next) => {
  try {
    const { title, description, category, property } = req.body;
    const { paintingImg } = req.files;
    await addPaintingSchema.validate(
      { title, description, category, property, paintingImg },
      { abortEarly: false },
    );
  } catch (err) {
    if (err.errors) {
      res.status(400).json({
        status: 400,
        message: err.errors,
      });
    } else {
      next(err);
    }
  }
};

const { addPaintingSchema } = require('../../utils/validation');
const uploadImg = require('../../utils/uploadImg');
const { addPaintingQuery } = require('../../database/queries');

exports.addPainting = async (req, res, next) => {
  try {
    const { title, description, category, property } = req.body;
    const { id } = req.user;
    const { paintingImg } = req.files;
    await addPaintingSchema.validate(
      { title, description, category, property, paintingImg },
      { abortEarly: false },
    );

    const { public_id: imgID, format } = await uploadImg(paintingImg.path);

    const { rows } = await addPaintingQuery(
      title,
      `${imgID}.${format}`,
      description,
      category,
      property,
      id,
    );
    res.status(201).json({
      StatusCode: 201,
      data: { rows },
      message: 'Painting added successfully',
    });
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

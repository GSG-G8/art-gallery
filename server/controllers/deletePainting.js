const deletePaintingsQuery = require('../database/queries');

console.log('Helllooooooo');
const deletePainting = async (req, res, next) => {
  console.log('before try');
  try {
    const {
      params: { paintingId },
    } = req;
    // console.log('params :>> ', req);
    const check = await deletePaintingsQuery(paintingId);
    console.log('check :>> ', check);

    if (check.rowCount !== 0) {
      res.status(200).json({
        statusCode: 200,
        message: 'Hi',
      });
    } else {
      res.status(400).json({
        statusCode: 400,
        message: 'not exist',
      });
    }
    console.log('before catch err');
  } catch (err) {
    console.log('before next err');

    next(err);
  }
};
console.log('End');

module.exports = deletePainting;

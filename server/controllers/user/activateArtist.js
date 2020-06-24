/* eslint-disable no-restricted-globals */
const { switchActivateArtist } = require('../../database/queries');

const activateArtist = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    if (id > 0 && !isNaN(id)) {
      const { rows } = await switchActivateArtist(id);
      if (rows.length !== 0) {
        const { email, active } = rows[0];
        res.status(200).json({
          statusCode: 200,
          message: `artist with email:${email},update active to ${active} successfully`,
        });
      } else {
        res.status(404).json({
          statusCode: 404,
          message: 'no artist with this id',
        });
      }
    } else {
      res.status(400).json({
        statusCode: 400,
        message: 'bad request inter integer value',
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = activateArtist;

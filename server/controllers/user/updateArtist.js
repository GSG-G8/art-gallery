const { updateArtistQuery } = require('../../database/queries');
const { updateArtistSchema } = require('../../utils/validation');

const updateArtist = async (req, res, next) => {
  console.log(req.body);
  try {
    const { id: artistId } = req.user;
    const {
      mobileNo,
      customized,
      socialMediaAccounts,
      bio,
    } = await updateArtistSchema.validate(req.body, { abortEarly: false });
    const { rowCount } = await updateArtistQuery(
      mobileNo,
      customized,
      socialMediaAccounts,
      bio,
      artistId,
    );
    if (rowCount === 1) {
      res.json({
        statusCode: 200,
        message: 'Succefully update',
      });
    }
  } catch (err) {
    if (err.errors) {
      console.log(err.errors);
      res.status(400).json({ statusCode: 400, message: err.errors });
    } else {
      next(err);
    }
  }
};

module.exports = updateArtist;

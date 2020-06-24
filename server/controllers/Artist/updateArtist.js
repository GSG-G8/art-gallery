const { updateArtistQuery } = require('../../database/queries');
const { updateArtistSchema } = require('../../utils/validation');

const updateArtist = async (req, res, next) => {
  try {
    const {
      mobileNo,
      customized,
      profileImg,
      socialMediaAccounts,
      bio,
    } = req.body;
    const { id } = req.user;
    await updateArtistSchema.validate(
      {
        mobileNo,
        customized,
        profileImg,
        socialMediaAccounts,
        bio,
      },
      { abortEarly: false },
    );
    const { rowCount } = await updateArtistQuery(
      mobileNo,
      customized,
      profileImg,
      socialMediaAccounts,
      bio,
      id,
    );
    if (rowCount === 1) {
      res.json({
        statusCode: 200,
        data: { message: 'Succefully update' },
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        data: {
          message: "Can't edit artist profile",
        },
      });
    }
  } catch (err) {
    if (err.errors) {
      res.status(400).json({ statusCode: 400, data: { message: err.errors } });
    } else {
      next(err);
    }
  }
};

module.exports = updateArtist;

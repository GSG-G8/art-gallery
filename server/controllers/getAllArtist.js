const { getArtists } = require('../database/queries');

const getAllArtist = async (req, res, next) => {
  try {
    const { rows: data } = await getArtists();
    res.status(200).json({ statusCode: 200, data });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllArtist;

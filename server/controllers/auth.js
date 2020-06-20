const { sign } = require('jsonwebtoken');
const { compare } = require('bcrypt');
const { loginSchema } = require('../utils/validation');
const { getArtistByEmail } = require('../database/queries/artists');
const { getUserByEmail } = require('../database/queries/users');
require('dotenv').config();

exports.login = async (req, res, next) => {
  try {
    const { email, password, role } = await loginSchema.validate(req.body, {
      abortEarly: false,
    });
    let existingUser;
    switch (role) {
      case 'artist':
        existingUser = await getArtistByEmail(email);
        break;

      case 'customer':
        existingUser = await getUserByEmail(email);
        break;
      default:
        throw new Error('Choose your role');
    }
    if (existingUser.rows[0]) {
      const { id, password: hashedPasswored } = existingUser.rows[0];

      const isCorrectPassword = await compare(password, hashedPasswored);

      if (isCorrectPassword) {
        const token = sign({ id, role }, process.env.SECRET_KEY);
        res.cookie('token', token);
        res.json({ statusCode: 200, message: 'logged in successfully' });
      } else {
        res
          .status(400)
          .json({ statusCode: 400, message: 'Incorrect Password' });
      }
    } else {
      res
        .status(400)
        .json({ statusCode: 400, message: 'You have to sign up first' });
    }
  } catch (err) {
    if (err.errors) {
      res.status(400).json({
        status: 400,
        message: err.errors,
      });
    } else {
      console.log(err);
      next(err);
    }
  }
};

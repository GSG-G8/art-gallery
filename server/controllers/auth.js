const { sign } = require('jsonwebtoken');
const { compare, hash, genSalt } = require('bcrypt');
const { loginSchema, registerSchema } = require('../utils/validation');
const {
  getArtistByEmail,
  addArtist,
  addCustomer,
  checkCustomerEmail,
} = require('../database/queries');
const addUser = require('../utils/addUser');

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

      case 'user':
        existingUser = await checkCustomerEmail(email);
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
      next(err);
    }
  }
};

exports.registerController = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      password,
      email,
      role,
    } = await registerSchema.validate(req.body, {
      abortEarly: false,
    });
    let existingUser;
    switch (role) {
      case 'artist':
        existingUser = await getArtistByEmail(email);
        break;

      case 'customer':
        existingUser = await checkCustomerEmail(email);
        break;
      default:
        throw new Error('Choose your role');
    }
    if (existingUser.rows.length !== 0)
      return res
        .status(400)
        .json({ statusCode: 400, message: 'email exist !!' });

    let newPassword;
    try {
      const salt = await genSalt(10);
      const hashPass = await hash(password, salt);
      newPassword = hashPass;
    } catch (error) {
      next(error);
    }
    const newUser = {
      firstName,
      lastName,
      email,
      password: newPassword,
    };

    if (role === 'artist') {
      return addUser(addArtist, newUser, res, 'artist');
    }
    return addUser(addCustomer, newUser, res, 'customer');
  } catch (error) {
    if (error.message === 'Choose your role') {
      return res.status(400).json({ statusCode: 400, message: error.message });
    }
    if (error.name === 'ValidationError') {
      res.status(400).json({ statusCode: 400, message: error.errors[0] });
    } else {
      next(error);
    }
  }
};

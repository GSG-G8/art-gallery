const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
  getArtistByEmail,
  addArtist,
  addCustomer,
  checkCustomerEmail,
} = require('../database/queries');

const registerController = async (req, res, next) => {
  const {
    body: { firstName, lastName, password, email, role },
  } = req;
  try {
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
      const hash = await bcrypt.hash(password, 10);
      newPassword = hash;
    } catch (error) {
      next(error);
    }
    const newUser = {
      firstName,
      lastName,
      email,
      password: newPassword,
    };
    const addUser = async (query, user, roleUser) => {
      try {
        const { rows } = await query(user);
        const { id, name } = rows[0];
        const token = jwt.sign({ id, name }, process.env.SECRET_KEY);
        res.cookie(`${roleUser}Token`, token);
        res.status(200).json({
          statusCode: 200,
          message: `welcome,${rows[0].first_name},your account created successfully`,
        });
      } catch (error) {
        next(error);
      }
    };

    if (role === 'artist') {
      return addUser(addArtist, newUser, 'artist');
    }
    return addUser(addCustomer, newUser, 'customer');
  } catch (error) {
    if (error.message === 'Choose your role') {
      return res.status(400).json({ statusCode: 400, message: error.message });
    }
    next(error);
  }
};

module.exports = { registerController };

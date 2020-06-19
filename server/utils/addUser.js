const { sign } = require('jsonwebtoken');

const addUser = async (query, user, res, role) => {
  try {
    const {
      rows: [info],
    } = await query(user);
    const { id, first_name: userName } = info;
    const token = sign({ id, role }, process.env.SECRET_KEY);
    res.cookie('token', token);
    res.status(200).json({
      statusCode: 200,
      message: `WELCOME,${userName},your account created successfully`,
    });
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = addUser;

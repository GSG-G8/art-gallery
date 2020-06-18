const error = require('./errorHandlers');
const { registerController } = require('./auth');
const getPaintings = require('./getPaintings');

module.exports = { error, getPaintings, registerController };

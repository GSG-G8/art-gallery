const error = require('./errorHandlers');
const { getPaintings } = require('./Paintings');
const { postCart } = require('./Cart');

const auth = require('./auth');

module.exports = { error, getPaintings, postCart, auth };

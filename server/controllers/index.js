const error = require('./errorHandlers');
const getPaintings = require('./getPaintings');
const { addPainting } = require('./addPainting');

const auth = require('./auth');

module.exports = { error, getPaintings, auth, addPainting };

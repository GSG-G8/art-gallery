const error = require('./errorHandlers');
const getPaintings = require('./getPaintings');
const deletePainting = require('./deletePainting');
const auth = require('./auth');

module.exports = { error, getPaintings, auth, deletePainting };

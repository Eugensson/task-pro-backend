const validateBody = require('./validateBody');
const isValidId = require('./isValidId');
const authenticate = require('./authenticate');
const passport = require('./google-authenticate');
const upload = require('./upload');

module.exports = { validateBody, isValidId, authenticate, passport, upload };

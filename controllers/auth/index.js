const { googleAuth } = require('./googleAuth');
const { register } = require('./register');
const { login } = require('./login');
const { refresh } = require('./refresh');
const { logout } = require('./logout');

module.exports = {
  googleAuth,
  register,
  login,
  refresh,
  logout,
};

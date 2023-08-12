const { registerSchema, loginSchema, updateUserSchema } = require('./user');
const { refreshSchema } = require('./refreshSchema');
const { addBoardSchema, updateBoardSchema } = require('./board');
const { helperSchema } = require('./helper');

module.exports = {
  registerSchema,
  loginSchema,
  refreshSchema,
  updateUserSchema,
  addBoardSchema,
  updateBoardSchema,
  helperSchema,
};

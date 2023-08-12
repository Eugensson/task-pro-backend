const joi = require('joi');

const refreshSchema = joi.object({
  refreshToken: joi.string().required(),
});

module.exports = {
  refreshSchema,
};

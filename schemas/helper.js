const joi = require('joi');

const helperSchema = joi.object({
  email: joi.string().email().required(),
  comment: joi.string().min(20).required(),
});

module.exports = {
  helperSchema,
};

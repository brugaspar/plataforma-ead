const Joi = require("@hapi/joi");

module.exports = Joi.object({
  name: Joi.string().min(3).required(),
  birthday: Joi.date().iso(),
  docType: Joi.string(),
  docNumber: Joi.string().min(3),
  email: Joi.string().email().required(),
  status: Joi.number(),
  password: Joi.string().min(6).required(),
  address: {
    street: Joi.string(),
    number: Joi.number(),
    neighborhood: Joi.string(),
    complement: Joi.string(),
    country: Joi.string(),
    state: Joi.string(),
    city: Joi.string(),
    zipcode: Joi.string()    
  },
  timestamps: Joi.any().forbidden()
});
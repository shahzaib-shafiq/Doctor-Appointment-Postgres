import Joi from 'joi'

const registerSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'Name is required',
    'string.email': 'Invalid Name format',
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Name is required',
    'string.email': 'Invalid Name format',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Invalid email format',
  }),
  password: Joi.string().min(6).max(24).required().messages({
    'string.empty': 'Password is required',
    'string.min': 'Password should be at least 6 characters long',
  }), tlds: { allow: ['com', 'net'] },
  isAdmin: Joi.boolean(),
  isDoctor: Joi.boolean()

});


export { registerSchema }
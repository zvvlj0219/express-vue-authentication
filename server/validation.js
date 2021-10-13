//validation
// const Joi = require('@hapi/joi');
const Joi = require('joi');
// const validator = require('express-joi-validation').createValidator({})

//register validation
// const registerValidation = (data) => {
//   const schema = {
//     name:Joi.string()
//     .min(6).required(),
//     email:Joi.string()
//     .min(6).required().email(),
//     password:Joi.string()
//       .min(6).required()
//     };
//     return Joi.validate(data,schema)
//   }
  const registerValidation = (data) => {
  
    const schema = Joi.object({
      email:Joi.string()
        .min(6).required().email(),
      username:Joi.string()
        .min(3).required(),
      password:Joi.string()
        .min(6).required()
    });
    return schema.validate(data)
  }
  
//login validation
// const loginValidation = (data) => {

//   console.log(Joi)

//   const schema = {
//     email:Joi.string()
//       .min(6).required().email(),
//     password:Joi.string()
//       .min(6).required()
//   };
//   return Joi.validate(data,schema)
// }
const loginValidation = (data) => {

  const schema = Joi.object({
    email:Joi.string()
      .min(6).required().email(),
    password:Joi.string()
      .min(6).required()
  });
  return schema.validate(data)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;


const {check} = require('express-validator');

let validateRegisterUser = () => {
    return [ 
      check('Account.user_name', 'Invalid does not Empty').not().isEmpty(),
      check('Account.user_name', 'Invalid email').isEmail(),
      check('Account.password', 'password more than 6 degits').isLength({ min: 6 })
    ]; 
  }
  
  let validateLogin = () => {
    return [ 
      check('user.email', 'Invalid does not Empty').not().isEmpty(),
      check('user.email', 'Invalid email').isEmail(),
      check('user.password', 'password more than 6 degits').isLength({ min: 6 })
    ]; 
  }
  
  let validate = {
    validateRegisterUser: validateRegisterUser,
    validateLogin: validateLogin
  };
  
  module.exports = {validate};
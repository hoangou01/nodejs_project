var express = require('express');
const {validate} = require('../app/validator/accountValidator');
const {validationResult} = require('express-validator');
var router = express.Router();
const accountController = require('../app/controllers/accountController');
//show form register
router.get('/register', accountController.showRegister);
router.get('/login' , accountController.showLogin);
router.post('/login' , accountController.login);
//register
router.post('/register', accountController.registerUser);

module.exports = router;

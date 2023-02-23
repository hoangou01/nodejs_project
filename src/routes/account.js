var express = require('express');
const {validate} = require('../app/validator/accountValidator');
const {validationResult} = require('express-validator');
var router = express.Router();
const accountController = require('../app/controllers/accountController');

router.get('/', accountController.show);
router.post('/', validate.validateRegisterUser(),(req , res,next)=>{
    const errs = validationResult(req);
    if(!errs.isEmpty()){
        var firstErr = Array.from(errs).map((err) => err.msg)[0];
        res.send({firstErr});
        return;
    }
    accountController.registerUser
});

module.exports = router;

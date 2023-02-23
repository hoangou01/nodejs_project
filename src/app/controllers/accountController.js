const {Account , findAccount , registerAccount} = require('../services/accountSevice');
const {registerValidation} = require('../validator/accountValidator');
class userController {
    show(req , res){
        res.render("register");
    }
    registerUser (req , res){
        let validator = registerValidation(req.body);
        if(validator !== null){// validation catchs error input
            return res.send({message : validator});
        }else{// can't catch error
            registerAccount(req.body).then((isRegister)=>{
                if(isRegister == false){
                    console.log("this account is already exists!");
                }
                else{
                    console.log("register succesfully!");
                }
                
            })
        }
        

    }
}
module.exports = new userController();
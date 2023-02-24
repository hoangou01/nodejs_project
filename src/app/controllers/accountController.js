const {Account , findAccount , registerAccount , comparePass} = require('../services/accountSevice');
const {generaAccessToken , updateRefreshToken} = require('../services/authJwt');
const {registerValidation} = require('../validator/accountValidator');
// require('dotenv').config({path:__dirname+'/./../../.env'})
var randToken = require('rand-token');
class userController {
    showRegister(req , res){
        res.render("register");
    }
    showLogin(req,res){
        res.render("login");
    }
    async registerUser (req , res){
        // let validator =  registerValidation(req.body);
        // if(validator !== null){// validation catchs error input
        //     return res.send({message : validator});
        // }else{// can't catch error
        //     await registerAccount(req.body).then((isRegister)=>{
        //         if(isRegister == false){
        //             console.log("this account is already exists!");
        //         }
        //         else{
        //             console.log("register succesfully!");
        //         }
                
        //     })
        // }
        await registerAccount(req.body).then((isRegister)=>{
            if(isRegister == false){
                console.log("this account is already exists!");
            }
            else{
                console.log("register succesfully!");
            }
            
        })
        

    }
    async login (req , res){
        console.log(__dirname);
        const username = req.body.user_name;
        const userpassword = req.body.password;
        let user = await findAccount(req.body.user_name);
        if(!user){
           return res.status(401).send("User name is incorrect");
        }
        let isCorrectPass = comparePass(userpassword , user.password);
        if(isCorrectPass == false){
            return res.status(401).send("password is not correct!");
        }
        const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
        const accessTokenSerect = process.env.ACCESS_TOKEN_SECRET;
        console.log(accessTokenLife , accessTokenSerect);
        const headAccesstoken = {
            user_name : username.user_name,
        }
        let accesstoken = await generaAccessToken(headAccesstoken , accessTokenSerect , accessTokenLife);
        let refreshToken = randToken.generate(20);
        if(user.refreshToken){
            refreshToken = user.refreshToken;
        }else{
            await updateRefreshToken(user.user_name , refreshToken);
        }
        return res.json({
            accessToken : accesstoken,
            refreshToken : refreshToken,
            msg:"login succesfully!",
        })
        
    }
}
module.exports = new userController();
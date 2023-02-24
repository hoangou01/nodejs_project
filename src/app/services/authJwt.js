const jwt = require('jsonwebtoken');
const promisify = require('util').promisify;
const {findAccount} = require('./accountSevice');
const sign = promisify(jwt.sign).bind(jwt);
const verify = promisify(jwt.verify).bind(jwt);
const Account = require('../models/Account');
let generaAccessToken = async (headAccessToken , secret , tokenLife)=>{
    try {
        return await sign({
            headAccessToken
        },
        secret
        ,{
            algorithm : 'HS256',
            expiresIn : tokenLife,
        })
    } catch (error) {
        return null;
    }
}
//update refresh refreshtoken to 
let updateRefreshToken = async(userName , refreshToken)=>{
    try {
        let account = findAccount(userName);
        if(!account.refreshToken){
            await Account.update({
                refreshToken
            },
            {
                where: {user_name : userName}
            })
        return true;
    
        }else{
            return false;
        }
    } catch (error) {
        return false;
    }
}
module.exports = {generaAccessToken , updateRefreshToken };
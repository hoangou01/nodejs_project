const Account = require('../models/Account');
const bcrypt = require('bcrypt');
let findAccount =  async (username)=>{
    return await Account.findOne({
        where:{
            user_name : username,
        }
    })
}
let registerAccount = async(body)=>{
    let AccountExists = await findAccount(body.user_name);
    if(AccountExists == null){// exists Account
        bcrypt.hash(body.password , 10 , async(err , hashPass)=>{
            if(err) throw err;
            else{
                 await Account.create({
                    user_name : body.user_name,
                    password: hashPass,
                    created_date : new Date(Date.now())
                })
                return true;
            }
        })
    }else{// can't find Account
        return false;
    }
}
let comparePass = (password , userpassword)=>{
    return bcrypt.compareSync(password , userpassword);
}
        
  module.exports = {findAccount , registerAccount , comparePass }
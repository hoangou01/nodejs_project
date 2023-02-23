const Account = require('../models/Account');
const bcrypt = require('bcrypt');
let findAccount =  async (body)=>{
    return await Account.findOne({
        where:{
            user_name : body.user_name,
        }
    })
}
let registerAccount = async(body)=>{
    let AccountExists = await findAccount(body);
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
        
  module.exports = {findAccount , registerAccount }
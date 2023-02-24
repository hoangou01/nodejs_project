const sequelize = require('../../config/db/DBconnection');
const  Sequelize  = require('sequelize');



const Account = sequelize.define('account',{

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_name:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    password:{
        type: Sequelize.STRING,

        allowNull: false,
    },
    created_date:{
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW

    },refreshToken:{
        type: Sequelize.STRING,
        allowNull: true,
    }
   
},
{
    tableName: "account",
	
	indexes: [
	  {
		unique: true,
		fields: ["id"],
	  },
	],
    timestamps: false,
	charset: 'utf8mb4',
	collate: 'utf8mb4_unicode_ci',
  });

module.exports = Account;
const sequelize = require('../../config/db/DBconnection');
const  Sequelize  = require('sequelize');

const Product = sequelize.define('product',{

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        
        allowNull: false,
        
    },
    base_price:{
        type: Sequelize.DECIMAL,
        
		
    },
    product_sku:{
        type: Sequelize.STRING,

    },
	description:{
		type: Sequelize.STRING,
        allowNull: false,

	},
	category_id:{
		type: Sequelize.INTEGER,
        allowNull: false,
		references: 'category', // <<< Note, its table's name, not object name
        referencesKey: 'id' // <<< Note, its a column name

	},
	is_deleted:{
        type: Sequelize.INTEGER,
        allowNull: false,


    },
    //The magic start here
    // personId: {
    //       type: Sequelize.INTEGER,
    //       references: 'persons', // <<< Note, its table's name, not object name
    //       referencesKey: 'id' // <<< Note, its a column name
    // }
}, {
	tableName: "product",
	
	indexes: [
	  {
		unique: true,
		fields: ["id"],
	  },
	],
	charset: 'utf8mb4',
	collate: 'utf8mb4_unicode_ci',
  });






module.exports = Product;
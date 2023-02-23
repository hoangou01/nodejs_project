// const mysql=require('mysql');
// const connection=mysql.createConnection({
 
// host:'localhost',
//  user:'root',
//  password:'12345678',
//  database:'Larocheposay'
 
// });
// connection.connect(error => {
//     if (error) {
//         throw error;
//     }else{
//         console.log("Successfully connected to the database.");
//     }
//   });

let Sequelize = require("sequelize");

let sequelize = new Sequelize("larocheposay", "root", "12345678", {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false
    }
  });

  sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});
module.exports = sequelize;
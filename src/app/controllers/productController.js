const {Product, getAllproduct , creatProduct , deleteProductService} = require('../services/productSevice');
const db = require('../../config/db/DBconnection');
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
global.document = new JSDOM("localhost:3000/product").window.document;

class productController {
    //GET /product
    index(req, res,next) {
        getAllproduct().then(
            
            products => {
                products = Array.from(products).map(products =>  JSON.parse(JSON.stringify(products)));
                
                res.render('product',{
                    products:products

        })
            });
        
            
        
    };
    createProduct(req,res,next){
        
       creatProduct(req.body)
        .then(function(product){
            if(product){
                console.log("insert a product successfully!");
            }else{
                next;
            }
        });
        res.redirect("/product");
    }
    deletedProduct(req , res , next){
        
        let id = req.params.id;
        
        deleteProductService(id)
        .then((rowDeleted)=>{
            if(rowDeleted){
                
                console.log("deleted succesfully!");
            }else{

                console.log("deleted fail!");
            }
            
        });
        res.redirect("/product");
    }
    
    
}

module.exports = new productController();

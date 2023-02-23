var express = require('express');
var router = express.Router();
var url = require('url');
const productController = require('../app/controllers/productController');
const db = require('../config/db/DBconnection');
// productController.deletedProduct
router.get('/delete/:id', productController.deletedProduct);

router.get('/', productController.index);
router.post('/',productController.createProduct);

module.exports = router;

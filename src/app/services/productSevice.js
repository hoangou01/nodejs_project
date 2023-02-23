const product = require('../models/Product');

let getAllproduct = async() =>{
	return await product.findAll({
		where: {
		  is_deleted : 0
		}
	  });
}
let creatProduct = async (data)=>{
	return await product.create({
		name : data.name,
		base_price : data.base_price,
		product_sku : data.product_sku || null,
		description : data.description,
		category_id : data.category_id,
		is_deleted : 0
	});
};
let deleteProductService = async(id)=>{
	return await product.update(
		{ is_deleted : 1 },
		{ where: { id } }
	  );
}
module.exports = {getAllproduct , creatProduct , deleteProductService};
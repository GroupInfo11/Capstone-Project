var Product = require('../models/productModel');

module.exports.getAllProducts = (req, res, next) => {
	Product.find((err, products) => {
		if (err) throw err;
		res.send(products);
	});
};

module.exports.getProductByName = (req, res, next) => {
	let name = req.params.name;
	Product.find(
		{
			name: { $regex: '.*' + name + '.*', $options: 'i' },
		},
		(err, products) => {
			if (err) throw err;

			res.send(products);
		}
	);
};
module.exports.getProductByNameAdmin = (req, res, next) => {
	let name = req.params.name;
	Product.find(
		{
			productName: { $regex: '.*' + name + '.*', $options: 'i' },
		},
		(err, products) => {
			if (err) throw err;

			res.send(products);
		}
	);
};

module.exports.getProductById = function (req, res, next) {
	console.log(req.params.id);
	Product.findById(req.params.id, (err, product) => {
		if (err) throw err;
		console.log(product);
		res.send(product);
	});
};

module.exports.saveProduct = (req, res) => {
	let product = new Product(req.body);
	
	Product.findOne({ProductId: product.ProductId}, (err,result)=>{
		console.log(result);
		if(result == null){
			Product.create(product, (err) => {
				if (err) throw err;
				console.log(product);
				res.send(product);
			});
		}else{
			res.send("Failure");
		}
	});
	// console.log(isProductId);
	// if(isProductId.length == 0){

	// }
	
};

module.exports.deleteProduct = (req, res) => {
	Product.findById(req.params.id, (err, product) => {
		if (err) throw err;
		if (!product)
			return res.status(404).send('Product doesnt exist with this Id.');
		Product.findByIdAndRemove(req.params.id, (err) => {
			if (err) throw err;
			res.send(product);
		});
	});
};

module.exports.editProduct = (req, res) => {
	Product.findById(req.params.id, (err, product) => {
		if (err) throw err;
		if (!product)
			return res.status(404).send('Product doesnt exist with this Id.');
		var updatedProduct = {
			productName: req.body.productName,
			ProductId: req.body.ProductId,
			ProductPrice: req.body.ProductPrice,
			Description: req.body.Description,
			Quantity: req.body.Quantity,
			product_image: req.body.product_image,
		};
		Product.findOne({ProductId:req.body.ProductId}, (err,result)=>{
			if(result == null){
				Product.findByIdAndUpdate(req.params.id, updatedProduct, (err) => {
					if (err) throw err;
					res.send(updatedProduct);
				});
			}else{
				res.send("Failure");
			}
		})
		
	});
};

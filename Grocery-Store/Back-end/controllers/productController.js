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
			name: { $regex: '.*' + name + '.*', $options: 'i' },
		},
		(err, products) => {
			if (err) throw err;

			res.send(products);
		}
	);
};

module.exports.getProductById = function (req, res, next) {
	Product.findById(req.params.id, (err, product) => {
		if (err) throw err;
		res.send(product);
	});
};

module.exports.saveProduct = (req, res) => {
	let product = new Product(req.body);
	Product.create(product, (err) => {
		if (err) throw err;
		res.send(product);
	});
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
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			image: req.body.image,
		};
		Product.findByIdAndUpdate(req.params.id, updatedProduct, (err) => {
			if (err) throw err;
			res.send(updatedProduct);
		});
	});
};

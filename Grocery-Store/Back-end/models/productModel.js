const mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	ProductId: String,
	productName: String,
	ProductPrice: Number,
	Description: String,
	product_image: String,
	Quantity: Number,
	created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);

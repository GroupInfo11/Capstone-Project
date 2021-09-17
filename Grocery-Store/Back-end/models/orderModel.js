const mongoose = require('mongoose');
mongoose.pluralize(null);

var orderSchema = mongoose.Schema({
	_id: String,
	orderID: Number,
	email: String,
	Order: [
		{
			ProductId: String,
			productName: String,
			ProductPrice: Number,
			Description: String,
			product_image: String,
			Quantity: Number,
			created_at: { type: Date, default: Date.now },
		},
	],
	totalPrice: Number,
	orderStatus: String,
	product_image: String,
	__v: Number,
	user: String,
});

module.exports = mongoose.model('Orders', orderSchema);

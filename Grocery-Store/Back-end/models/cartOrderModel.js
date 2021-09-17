const mongoose = require('mongoose');
mongoose.pluralize(null);

var orderSchema = mongoose.Schema({
	_id: String,
	Order: [
		{
			productId: String,
			product_name: String,
			qty: Number,
			price: Number,
		},
	],
	totalPrice: Number,
	user: String,
});

module.exports = mongoose.model('CartOrders', orderSchema);

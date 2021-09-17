const mongoose = require("mongoose");
mongoose.pluralize(null);

var orderSchema = mongoose.Schema({
  _id:String,
  orderID:Number,
  email:String,
  Order:[{
    productName:String,
    ProductPrice:String,
    ProductId:String,
    created_at: { type: Date, default: Date.now },
  }],
  totalPrice:Number,
  orderStatus:String,
  product_image: String,
  __v:Number,
  user:String
});

module.exports = mongoose.model("Orders", orderSchema);
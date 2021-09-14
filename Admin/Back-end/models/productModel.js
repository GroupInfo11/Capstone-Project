const mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);

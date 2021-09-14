const mongoose = require("mongoose");
mongoose.pluralize(null);

var requestSchema = mongoose.Schema({
  empEmail: String,
  productName: String,
  operation: String,
  qty: String
});

module.exports = mongoose.model("EmpRequest", requestSchema);
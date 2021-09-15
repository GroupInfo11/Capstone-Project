const mongoose = require("mongoose");
mongoose.pluralize(null);

var requestSchema = mongoose.Schema({
  orderStatus:String,
});

module.exports = mongoose.model("Users", requestSchema);
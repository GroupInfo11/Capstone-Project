let mongoose = require("mongoose");
mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    customerEmail:String,
    funds:Number,
    lockStatus:String
  });

module.exports = mongoose.model("Users", userSchema);

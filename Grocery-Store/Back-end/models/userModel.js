let mongoose = require("mongoose");
mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    email:String,
    funds:Number
  });

module.exports = mongoose.model("Users", userSchema);

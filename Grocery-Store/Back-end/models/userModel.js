let mongoose = require("mongoose");
mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    _id:String,
    email:String,
    password:String,
    funds:Number,
    address:String,
    phone:String
  });

module.exports = mongoose.model("Users", userSchema);

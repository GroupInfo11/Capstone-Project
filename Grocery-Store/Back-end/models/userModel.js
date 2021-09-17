let mongoose = require("mongoose");
mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    _id:String,
    email:String,
    username:String,
    funds:Number,
    fName:String,
    lName:String,
    phone:String,
    address:String,
    password:String,
    accountNum:String,
    lockStatus:String
  });

module.exports = mongoose.model("Users", userSchema);

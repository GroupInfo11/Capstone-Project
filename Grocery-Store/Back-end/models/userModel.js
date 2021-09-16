let mongoose = require("mongoose");
mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    email:String,
    funds:Number,
    lockStatus:String,
    funds:Number,
    fName:String,
    lName:String,
    phone:String,
    address:String,
    password:String,
    id:String
  });

module.exports = mongoose.model("Users", userSchema);

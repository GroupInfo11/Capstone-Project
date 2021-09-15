let mongoose = require("mongoose");
mongoose.pluralize(null);

let userSchema = mongoose.Schema({
    _id:Number,
    fName:String,
    lName:String,
    email:String,
    password:String,
    phone:String,
    address:String
  });

let userModel = mongoose.model("Users",userSchema);

modules.export = userModel;
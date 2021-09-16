let mongoose = require("mongoose");
mongoose.pluralize(null);

let userSchema = mongoose.Schema({
<<<<<<< HEAD
    customerEmail:String,
    funds:Number,
    lockStatus:String
=======
    _id:String,
    email:String,
    funds:Number,
    fName:String,
    lName:String,
    phone:String,
    address:String,
    password:String,
    id:String
>>>>>>> 98a9c09ba76b2623fcded83a70ad499eb7098cba
  });

module.exports = mongoose.model("Users", userSchema);

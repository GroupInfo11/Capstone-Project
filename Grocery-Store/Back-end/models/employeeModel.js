let mongoose = require("mongoose");
mongoose.pluralize(null);

let employeeSchema = mongoose.Schema({
    user:{type:String, unique:true},
    pass:{type:String},
    fName:{type:String},
    lName:{type:String},
    email:{type:String}
});

let employeeModel = mongoose.model("Employee", employeeSchema);

module.exports = employeeModel;
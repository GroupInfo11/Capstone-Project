let employeeModel = require("../models/employeeModel");

let signIn = async(req,res)=>{
    let employee = req.body;
    let userInfo = await employeeModel.findOne({user:employee.user, pass:employee.pass});
    let info = await employeeModel.find({});
    console.log(userInfo);
    if(userInfo!=null){
        res.send("Success");
    }else{
        res.send("Invalid username or password");
    }
}

module.exports = {signIn};
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

let signUp = async(req,res)=>{
    let employee = req.body;
    let userInfo = new employeeModel({_id:employee.id,fName:employee.first,lName:employee.last,email:employee.email,pass:employee.password});
    empModel.insertMany(employee, (err,result)=> {
    if(!err){
        console.log(result)
    } else {
        console.log(err);
    }
    })
}

module.exports = {signIn};
module.exports = {signUp};

// let employee = new empModel({_id:signup.id,fName:signup.first,lName:signup.last,email:signup.email});
empModel.insertMany(employee, (err,result)=> {
if(!err){
  console.log(result)
} else {
  console.log(err);
}
mongoose.disconnect();  
})
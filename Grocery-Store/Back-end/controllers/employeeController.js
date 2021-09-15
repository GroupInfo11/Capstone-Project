let employeeModel = require("../models/employeeModel");

let signIn = async(req,res)=>{
    let employee = req.body;
    let userInfo = await employeeModel.findOne({user:employee.user, pass:employee.pass});
    let info = await employeeModel.find({});
    console.log(info);
    if(userInfo!=null){
        res.send("Success");
    }else{
        res.send("Invalid username or password");
    }
}

let deleteEmp = async(req,res)=>{
    let deleteid = req.body.id;
    let userInfo = await employeeModel.findOne({id:deleteid});
    let info = await employeeModel.deleteOne({userInfo});
    console.log(userInfo);
    if(userInfo!=null){
        res.send("Success");
    }else{
        res.send("ID not found");
    }
}

let signUp = async(req,res)=>{
    let employee = req.body;
    let userInfo = new employeeModel({_id:employee.id,fName:employee.first,lName:employee.last,email:employee.email,pass:employee.password});
    employeeModel.insertMany(employee, (err,result)=> {
    if(!err){
        console.log(result)
    } else {
        console.log(err);
    }
    })
}
module.exports = {signIn, signUp, deleteEmp};

// // let employee = new empModel({_id:signup.id,fName:signup.first,lName:signup.last,email:signup.email});
// employeeModel.insertMany(employee, (err,result)=> {
// if(!err){
//   console.log(result)
// } else {
//   console.log(err);
// }
// mongoose.disconnect();  
// })
let employeeModel = require("../models/employeeModel");
let userModel = require("../models/userModel");

let unlockUser = (req,res) => {
    let user = req.body;
    console.log(user.email);
    userModel.updateOne({ email: user.email}, { $set: {lockStatus: user.lockStatus}}, (err, result) => {
        if(!err){
            res.status(201).send({message: 'unlock successfully'});
        } else {
            res.send(err);
        }

    })
}

let checkPassword = async (req, res) => {
    let user = req.body;
    
    let userInfo = await employeeModel.findOne({email:user.email, pass:user.pass});
    
    if(userInfo!=null){
        res.send("true");
    }else {
        res.send(" employee email not exist");
    }
    
}


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
    //let userInfo = await employeeModel.findOne({id:deleteid});
    let userInfo = await employeeModel.deleteOne({user:deleteid});
    console.log(userInfo);
    if(userInfo!=null){
        res.send("Success");
    }else{
        res.send("ID not found");
    }
}

let signUp = async(req,res)=>{
    let employee = req.body;
    //let userInfo = new employeeModel({_id:employee.id,fName:employee.first,lName:employee.last,email:employee.email,pass:employee.password});
    employeeModel.insertMany(employee, (err,result)=> {
    if(!err){
        res.status(201).send({message:result})
    } else {
        console.log(err);
    }
})
}

let updateEmployeePassword = (req,res) =>{
    let user = req.body;
    
    employeeModel.updateOne({ email: user.email}, { $set: {pass: user.passNew}}, (err, result) => {
        if(!err){
            res.send("password changed successfully");
        } else {
            res.send(err);
        }

    })
}
   

module.exports={unlockUser,signUp, deleteEmp, signIn, checkPassword, updateEmployeePassword};






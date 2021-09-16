let employeeModel = require("../models/employeeModel");
let userModel = require("../models/userModel");

let unlockUser = (req,res) => {
    let user = req.body;
    
    userModel.updateOne({ email: user.customerEmail}, { $set: {lockStatus: user.lockStatus}}, (err, result) => {
        if(!err){
            res.status(201).send({message: 'unlock successfully'});
        } else {
            res.send(err);
        }

    })
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
   

module.exports={unlockUser,signUp, deleteEmp, signIn};






let userModel = require("../models/userModel");

let signIn = async(req,res)=>{
    let employee = req.body;
    let userInfo = await userModel.findOne({user:employee.user, pass:employee.pass});
    let info = await userModel.find({});
    console.log(info);
    if(userInfo!=null){
        res.send("Success");
    }else{
        res.send("Invalid username or password");
    }
}

let deleteUser = async(req,res)=>{
    let deleteid = req.body.id;
    let userInfo = await userModel.findOne({id:deleteid});
    let info = await userModel.deleteOne({userInfo});
    console.log(userInfo);
    if(userInfo!=null){
        res.send("Success");
    }else{
        res.send("ID not found");
    }
}

let signUp = async(req,res)=>{
    let user = req.body;
    let userInfo = new employeeModel({_id:user.id,fName:user.first,lName:user.last,email:user.email,pass:user.password});
    userModel.insertMany(user, (err,result)=> {
    if(!err){
        console.log(result)
    } else {
        console.log(err);
    }
    })
}
module.exports = {signIn, signUp, deleteUser};

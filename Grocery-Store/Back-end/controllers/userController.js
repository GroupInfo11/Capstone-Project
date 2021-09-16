let userModel = require("../models/userModel");

let signIn = async(req,res)=>{
    let employee = req.body;
    let userInfo = await userModel.findOne({id:employee.id, password:employee.password});
    let info = await userModel.find({});
    console.log(info);
    if(userInfo!=null){
        if(userInfo.lockStatus <= 3){
            res.send("Success");
        }
        else{
            res.send("Too many attempts, account locked");
        }
    }else{
        let attemptInfo = await userModel.findOne({id:employee.id});
        if(attemptInfo!=null){
            await userModel.updateOne({id:employee.id}, {$set: {lockStatus: attemptInfo.lockStatus+1}});
        }
        res.send("Wrong password "+ (2-attemptInfo.lockStatus) + " attempts left");
    }

    
}

let deleteUser = async(req,res)=>{
    let deleteid = req.body.id;
    let userInfo = await userModel.findOne({id:deleteid});
    console.log(userInfo);
    if(userInfo!=null){
        res.send("Success");
    }else{
        res.send("ID not found");
    }
}

let signUp = async(req,res)=>{
    let user = req.body;
    userModel.insertMany(user, (err,result)=> {
    if(!err){
        console.log(result)
    } else {
        console.log(err);
    }
    })
}
module.exports = {signIn, signUp, deleteUser};

let userModel = require("../models/userModel");

let signIn = async(req,res)=>{
    let employee = req.body;
    let userInfo = await userModel.findOne({id:employee.id, password:employee.password});
    if(userInfo!=null){
        if(userInfo.lockStatus <= 3){
            await userModel.updateOne({id:employee.id}, {$set: {lockStatus: 0}});
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

let updateCustomerDetails = (req,res)=>{
    let user = req.body;
    console.log(user.username);
    // if((user.password!=null && user.confirmpass!=null) && (user.password != user.confirmpass)){
    //     res.json({msg:"Please enter a matching password in both password fields."})
    // }

    userModel.updateOne({username:user.username}, {$set:{password:user.password, address:user.address, phone:user.phone, email:user.email}},(err,result)=>{
        if(!err){
            console.log(result)
            if(result.nModified > 0){
                res.json({msg:"Record modified succesfully!"});
            }else{
                res.json({msg:"Record not modified..."});
            }
        }else{
            res.send(err);
        }
    });
}

let getCustomerFunds = (req,res)=>{
    let userEmail = req.body;
    console.log(userEmail.email);
    userModel.findOne({email:userEmail.email}, (err,data)=>{
        if(!err){
            console.log(data);
            res.send(""+data.funds);
        }else{
            console.log(err);
        }
    })
}

let editCustomerFunds = (req,res)=>{
    let info = req.body;
    console.log(info);
    userModel.updateOne({user:info.user, accountNum:info.accountNum}, {$set:{funds:info.fundsToAdd}},(err,result)=>{
        if(!err){
            if(result.modifiedCount > 0){
                res.send("Funds added successfully!");
            }else{
                res.send("Funds not modified...");
            }
        }else{
            res.send(err);
        }
    });
}
module.exports = {signIn, signUp, deleteUser, updateCustomerDetails, getCustomerFunds, editCustomerFunds};
let getAllUsers = (req,res)=>{
    userModel.find({}, (err,data)=>{
        if(!err){
            console.log(data);
            res.send(data);
        }else{
            console.log(err);
        }
    })
}

module.exports = {signIn, signUp, deleteUser, updateCustomerDetails, getCustomerFunds, editCustomerFunds, getAllUsers};

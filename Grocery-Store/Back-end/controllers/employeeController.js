let employeeModel = require("../models/employeeModel");
let userModel = require("../models/userModel");

let unlockUser = (req,res) => {
    let user = req.body;
    
    userModel.updateOne({ customerEmail: user.customerEmail}, { $set: { lockStatus: user.lockStatus } }, (err, result) => {
        if(!err){
            res.status(201).send({message: 'unlock successfully'});
        } else {
            res.send(err);
        }
    })
}

module.exports={unlockUser};
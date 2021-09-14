let empRequest = require("../models/empRequestModel");

let addRequest = (req, res) => {
    let ticket = req.body;

    empRequest.insertMany(ticket, (err, result) => {
        if(!err){
            res.send("Send a request successfully");
        } else {
            res.send(err);
        }
    })
}

let getAllRequest = (req, res)=> {
    empRequest.find({}, (err,data)=> {
        if(!err){
            res.send(data);
        } else {
            res.send(err);
        }
    })
}

module.exports = {addRequest, getAllRequest};
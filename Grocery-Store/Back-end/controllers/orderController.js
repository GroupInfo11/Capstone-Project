let orderModel = require("../models/orderModel");

let addOrder = (req,res) => {
    let orderData = req.body;
    orderModel.insertMany(orderData, (err, result) => {
        
    })
}
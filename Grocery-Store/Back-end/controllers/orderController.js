let orderModel = require("../models/orderModel");

let addOrder = (req,res) => {
    let orderData = req.body;
    orderModel.insertMany(orderData, (err, result) => {
        
    })
}

let getOrder = async(req,res)=>{
    let orderInfo = await orderModel.find({});
    console.log(orderInfo);
    res.json(orderInfo);
}

module.exports={addOrder,getOrder};
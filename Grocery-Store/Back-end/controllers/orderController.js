let orderModel = require("../models/orderModel");
let userModel = require("../models/userModel")

let updateOrder = (req, res) => {
    let order = req.body;
    if (order.orderStatus == "cancelled") {
        //join 2 collections users and order
        orderModel.aggregate([
            {
                //find a match id from those two tables
                $lookup: {
                    from: "Users",
                    localField: "customerEmail",
                    foreignField: "customerEmail",
                    as: "user_email"
                }
            },
            {
                $unwind: "$user_email",
            }

        ]).then(data => {
            data.forEach((item) => {
                if (item.customerEmail == order.customerEmail) {
                    //update data in user table
                    userModel.updateOne({ customerEmail: order.customerEmail }, { $inc: { funds : item.totalPrice, "user_email.funds": item.user_email.funds} }, (err, result) => {
                        if(!err) {
                            res.send("Refund to user fund account successfully");
                        } else {
                            res.send(err);
                        }
                    });
                }
            })

        })
    } else {
        orderModel.updateOne({ customerEmail: order.customerEmail }, { $set: { orderStatus: order.orderStatus } }, (err, result) => {
            if (!err) {
                res.send("update order successfully");
            } else {
                res.send(err)
            }
        })
    }

}

let addOrder = (req, res) => {
    let order = req.body;

    orderModel.insertMany(order, (err, result) => {
        if (!err) {
            res.send("Send a order request successfully");
        } else {
            res.send(err);
        }
    })

}


let getOrder = async(req,res)=>{
    let orderInfo = await orderModel.find({});
    console.log(orderInfo);
    res.json(orderInfo);
}

module.exports={addOrder,getOrder, updateOrder};


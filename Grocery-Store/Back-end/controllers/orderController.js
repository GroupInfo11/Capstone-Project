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


let getOrder = (req,res)=>{
    let userInfo = req.body;
    console.log(userInfo.user);
    orderModel.find({user:userInfo.user}, (err,data)=>{
        if(!err){
            console.log(data);
            res.json(data);
        }else{
            res.send("Failure");
        }
    });

    // console.log(orderInfo);
    // let orderInfo = await orderModel.aggregate(
    //     [
    //         {
    //             $lookup:
    //             {
    //                 from:"Users",
    //                 localField:"customerEmail",
    //                 foreignField:"customerEmail",
    //                 as:"UserDetails"
    //             }
    //         },
    //         {
    //             $unwind: "$UserDetails",
    //         }
    //     ]
    // );
    // console.log(orderInfo);
    // if(orderInfo.customerEmail==o)
    // orderInfo.forEach(o=>{
    //     console.log("Order Customer Email: "+o.customerEmail);
    //     console.log("User Customer Email: "+o.UserDetails.customerEmail);
    //     if(o.customerEmail == o.UserDetails.customerEmail){
            
    //     }else{
    //         console.log("ERROR TRY AGAIN")
    //     }
    // })
    // res.json(orderInfo);
}

module.exports={addOrder, getOrder, updateOrder};


let orderModel = require('../models/orderModel');
let userModel = require('../models/userModel');
let cartAddModel = require('../models/cartOrderModel');

let updateOrder = (req, res) => {
    let order = req.body;
    if (order.orderStatus == "Cancelled") {
        userModel.aggregate([
            {
                //find a match id from those two tables
                $lookup: {
                    from: "Users",
                    localField: "email",
                    foreignField: "email",
                    as: "user_email"
                }
            },
            {
                $unwind: "$user_email",
            }

        ]).then(data => {
            data.forEach((item) => {
                if (item.email == order.email) {
                    //update data in user table
                    userModel.updateOne({ customerEmail: order.email }, { $inc: { funds : item.totalPrice, "user_email.funds": item.user_email.funds} }, (err, result) => {
                        if(!err) {
                            res.status(201).send({message: 'Refund to user account successfully'});
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
                res.status(201).send({message: 'Updated successfully'});
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
			res.send('Send a order request successfully');
		} else {
			res.send(err);
		}
	});
};

let addCartOrder = (req, res) => {
	let order = req.body;
    let user = userModel.findOne({username:order.user}, (err,result)=>{
        if(!err){
            console.log("Found user: " + result);
            console.log(order.totalPrice);
            if(result.funds >= order.totalPrice){
            
                let email = user.email;
                orderModel.insertMany({orderID:1001, email: email, Order: order.cart, totalPrice: order.totalPrice, orderStatus: "Shipped", user: order.user}, (err, result) => {
                    if (!err) {
                        userModel.findOneAndUpdate({username:order.user}, {$inc:{funds:-order.totalPrice}}, (err, result)=>{
                            if(!err){
                                console.log("Success");
                            }else{
                                console.log(err);
                            }
                        })
                        res.send('Success');
                    } else {
                        res.send(err);
                    }
                });
                
            }else{
                res.send('Not enough funds.')
            }
        }else{
            console.log(err);
        }
    });
    console.log("User Funds: "+ user.funds + " | Order total price: "+order.totalPrice);
    
    
};

let getOrder = (req,res)=>{
    let userInfo = req.body;
    console.log(userInfo.user);
    orderModel.find({user:userInfo.user}, (err,data)=>{
        if(err) throw err;
        console.log(data);
        res.send(data);
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

let getAllOrderDeatils = (req, res) => {
    orderModel.find({}, (err, products) => {
		if (err) throw err;
		res.send(products);
	});
}

let deleteOrderById = (req, res) => {
    let id = req.params.id;
    orderModel.findByIdAndDelete(id, (err, result) => {
		if (err) throw err;
        console.log(result);
		res.send(result);
	});
}

module.exports={addOrder, addCartOrder, getOrder, updateOrder, getAllOrderDeatils, deleteOrderById};

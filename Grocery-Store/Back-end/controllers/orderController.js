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

	cartAddModel.insertMany(order, (err, result) => {
		if (!err) {
			res.send('Send a order request successfully');
		} else {
			res.send(err);
		}
	});
};

let getOrder = async (req, res) => {
	let userInfo = req.body;
	console.log(userInfo.user);
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
}
let getAllOrderDeatils = (req, res) => {
    orderModel.find({}, (err, products) => {
		if (err) throw err;
		res.send(products);
	});
}

module.exports={addOrder,getOrder, updateOrder, getAllOrderDeatils};


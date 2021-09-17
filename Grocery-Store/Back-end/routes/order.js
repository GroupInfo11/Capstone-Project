const express = require('express');
let router = express.Router();
let OrderController = require('../controllers/orderController');

<<<<<<< HEAD
router.put("/updateOrderStatus", OrderController.updateOrder);
router.post("/addOrder", OrderController.addOrder);
router.get("/getOrder", OrderController.getOrder);
router.get("/getAllOrderDeatils", OrderController.getAllOrderDeatils)
module.exports = router;
=======
router.put('/updateOrderStatus', OrderController.updateOrder);
router.post('/addOrder', OrderController.addOrder);
router.post('/addCartOrder', OrderController.addCartOrder);
module.exports = router;
>>>>>>> 76bbd05712f466f417d02c338096d4ca05f87c0e

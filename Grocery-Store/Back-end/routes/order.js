const express = require('express');
let router = express.Router();
let OrderController = require('../controllers/orderController');

router.put("/updateOrderStatus", OrderController.updateOrder);
router.post("/addOrder", OrderController.addOrder);
router.get("/getOrder", OrderController.getOrder);
router.get("/getAllOrderDeatils", OrderController.getAllOrderDeatils);
router.post('/addCartOrder', OrderController.addCartOrder);
router.delete('/deleteOrderById/:id', OrderController.deleteOrderById);
module.exports = router;

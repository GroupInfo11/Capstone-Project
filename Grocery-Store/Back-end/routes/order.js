const express = require("express");
let router = express.Router();
let OrderController = require("../controllers/orderController");

router.put("/updateOrderStatus", OrderController.updateOrder);
router.post("/addOrder", OrderController.addOrder);

module.exports = router;
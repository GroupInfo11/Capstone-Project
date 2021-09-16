const express = require("express");
let router = express.Router();
let OrderController = require("../controllers/orderController");

router.put("/updateOrderStatus", OrderController.updateOrder);
router.post("/addOrder", OrderController.addOrder);
router.get("/getOrder", OrderController.getOrder);
module.exports = router;
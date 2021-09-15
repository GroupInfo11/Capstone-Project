let express = require("express");
let router = express.Router();
let orderController = require("../controllers/orderController");

router.get("/getAllOrders", orderController.getOrder);
// router.post("/signUp", employeeController.signUp);


module.exports = router;
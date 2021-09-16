let express = require("express");
let router = express.Router();
let orderController = require("../controllers/orderController");
let userController = require("../controllers/userController");

router.get("/getAllOrders/:email", orderController.getOrder);
router.post("/signIn", userController.signIn);
router.post("/signUp", userController.signUp);

module.exports = router;
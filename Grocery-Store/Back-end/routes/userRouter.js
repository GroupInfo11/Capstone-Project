let express = require("express");
let router = express.Router();
let orderController = require("../controllers/orderController");
let userController = require("../controllers/userController");

router.get("/getAllOrders", orderController.getOrder);
router.post("/signIn", userController.signIn);
router.post("/signUp", userController.signUp);
router.post("/delete", userController.deleteUser);

module.exports = router;
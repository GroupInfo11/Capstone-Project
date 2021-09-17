let express = require("express");
let router = express.Router();
let orderController = require("../controllers/orderController");
let userController = require("../controllers/userController");

router.post("/getAllOrders", orderController.getOrder);
router.post("/signIn", userController.signIn);
router.post("/signUp", userController.signUp);

router.put("/editProfile", userController.updateCustomerDetails);
router.post("/getCustomerFunds", userController.getCustomerFunds);

router.post("/delete", userController.deleteUser);
router.put("/editCustomerFunds", userController.editCustomerFunds);
router.post("/getCustomerDetails", userController.getCustomerDetails);
module.exports = router;
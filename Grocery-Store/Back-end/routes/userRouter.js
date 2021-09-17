let express = require("express");
let router = express.Router();
let orderController = require("../controllers/orderController");
let userController = require("../controllers/userController");

router.put("/getAllOrders", orderController.getOrder);
router.post("/signIn", userController.signIn);
router.post("/signUp", userController.signUp);
router.get("/getCustomerDetails", userController.getAllUsersDetails);
router.put("/editProfile", userController.updateCustomerDetails);
router.post("/getCustomerFunds", userController.getCustomerFunds);
router.post("/getAllUsers", userController.getAllUsers);
router.post("/delete", userController.deleteUser);
router.put("/editCustomerFunds", userController.editCustomerFunds);
router.put("/getCustomerDetails", userController.getCustomerDetails);
module.exports = router;
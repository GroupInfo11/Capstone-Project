let express = require("express");
let router = express.Router();
let orderController = require("../controllers/orderController");
let userController = require("../controllers/userController");

router.get("/getAllOrders/:email", orderController.getOrder);
router.post("/signIn", userController.signIn);
router.post("/signUp", userController.signUp);

router.put("/editProfile", userController.updateCustomerDetails);
router.post("/getCustomerFunds", userController.getCustomerFunds);
router.get("/getallUsers", userController.getAllUsersDetails);
router.post("/delete", userController.deleteUser);
router.put("/editCustomerFunds", userController.editCustomerFunds);

module.exports = router;
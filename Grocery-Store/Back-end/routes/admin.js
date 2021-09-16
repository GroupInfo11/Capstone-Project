var express = require("express");
var router = express.Router()
var AdminController = require("../controllers/adminController");

router.get("/", AdminController.getAllUsers);
router.post("/", AdminController.loginAdmin);

router.get("/:id", AdminController.getUserById);
router.delete("/:id", AdminController.deleteAdmin);

router.post("/save", AdminController.saveUser);
router.patch("/:id", AdminController.updateAddressAndCard);

router.put("/:id", AdminController.editUser);

module.exports = router;

var express = require("express");
var router = express.Router();
<<<<<<< HEAD
var AdminController = require("../controllers/AdminController");
=======
var Admin = require("../models/adminModel");
var AdminController = require("../controllers/adminController");
>>>>>>> b7cb591f88f5075f0157cd1e2fbff284e7a52522

router.get("/", AdminController.getAllUsers);
router.post("/", AdminController.loginAdmin);

router.get("/:id", AdminController.getUserById);
router.delete("/:id", AdminController.deleteAdmin);

router.post("/save", AdminController.saveUser);
router.patch("/:id", AdminController.updateAddressAndCard);

router.put("/:id", AdminController.editUser);

module.exports = router;

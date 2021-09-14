let express = require("express");
let router = express.Router();
let employeeController = require("../controllers/employeeController");

router.post("/signIn", employeeController.signIn);

module.exports = router;
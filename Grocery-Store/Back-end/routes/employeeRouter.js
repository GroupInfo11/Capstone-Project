let express = require("express");
let router = express.Router();
let employeeController = require("../controllers/employeeController");

router.put("/unlockUser", employeeController.unlockUser)


module.exports = router;
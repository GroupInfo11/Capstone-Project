let express = require("express");
let router = express.Router();
let employeeController = require("../controllers/employeeController");
const employeeModel = require("../models/employeeModel");

router.put("/unlockUser", employeeController.unlockUser);
router.post("/signIn", employeeController.signIn);
router.post("/signUp", employeeController.signUp);
router.post("/delete", employeeController.deleteEmp);
router.put("/updateEmployeePassword",employeeController.updateEmployeePassword);
router.post("/checkPassword", employeeController.checkPassword);


module.exports = router;
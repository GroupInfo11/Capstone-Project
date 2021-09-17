let express = require("express");
let router = express.Router();
let employeeController = require("../controllers/employeeController");

router.put("/unlockUser", employeeController.unlockUser);
router.post("/signIn", employeeController.signIn);
router.post("/signUp", employeeController.signUp);
router.post("/delete", employeeController.deleteEmp);


module.exports = router;
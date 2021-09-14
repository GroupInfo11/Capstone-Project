const express = require("express");
let router = express.Router();
let requestController = require("../controllers/requestController");

router.get("/getRequests", requestController.getAllRequest);
router.post("/addRequest", requestController.addRequest);

module.exports = router;
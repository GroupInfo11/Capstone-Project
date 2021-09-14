var express = require("express");
var router = express.Router();
var Product = require("../models/productModel");
var productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);
router.get("/admin", productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.get("/search/:name", productController.getProductByName);
router.get("/admin/search/:name", productController.getProductByNameAdmin);

router.post("/save", productController.saveProduct);

router.delete("/:id", productController.deleteProduct);

router.put("/update/:id", productController.editProduct);

module.exports = router;

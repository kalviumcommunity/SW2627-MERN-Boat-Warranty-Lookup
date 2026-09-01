const express = require("express");

const {
  createProduct,
  getProductBySerialNumber,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/", createProduct);

router.get("/:serialNumber", getProductBySerialNumber);

module.exports = router;
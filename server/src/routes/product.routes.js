const express = require("express");

const {
  getProductBySerialNumber,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/:serialNumber", getProductBySerialNumber);

module.exports = router;
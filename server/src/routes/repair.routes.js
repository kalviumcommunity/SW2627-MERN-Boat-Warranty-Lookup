const express = require("express");

const {
  createRepair,
  getRepairsByProductId,
} = require("../controllers/repair.controller");

const router = express.Router();

router.post("/", createRepair);

router.get(
  "/product/:productId",
  getRepairsByProductId
);

module.exports = router;
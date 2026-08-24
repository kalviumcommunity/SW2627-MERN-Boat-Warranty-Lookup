const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    serialNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    productName: {
      type: String,
      required: true,
      trim: true
    },
    model: {
      type: String,
      required: true,
      trim: true
    },
    purchaseDate: {
      type: Date,
      required: true
    },
    warrantyExpiry: {
      type: Date,
      required: true
    },
    warrantyPdf: {
      type: String,
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
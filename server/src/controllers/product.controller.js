const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    const {
      serialNumber,
      productName,
      model,
      purchaseDate,
      warrantyExpiry
    } = req.body;

    if (
      !serialNumber ||
      !productName ||
      !model ||
      !purchaseDate ||
      !warrantyExpiry
    ) {
      return res.status(400).json({
        success: false,
        message: "All product fields are required"
      });
    }

    const existingProduct = await Product.findOne({ serialNumber });

    if (existingProduct) {
      return res.status(409).json({
        success: false,
        message: "Serial number already exists"
      });
    }

    const product = await Product.create({
      serialNumber,
      productName,
      model,
      purchaseDate,
      warrantyExpiry
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product
    });
  } catch (error) {
    console.error("Create product error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create product"
    });
  }
};

const getProductBySerialNumber = async (req, res) => {
  try {
    const { serialNumber } = req.params;

    const product = await Product.findOne({ serialNumber });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Serial number not found"
      });
    }

    const warrantyActive =
      new Date(product.warrantyExpiry) >= new Date();

    res.status(200).json({
      success: true,
      data: {
        id: product._id,
        serialNumber: product.serialNumber,
        productName: product.productName,
        model: product.model,
        purchaseDate: product.purchaseDate,
        warrantyExpiry: product.warrantyExpiry,
        warrantyStatus: warrantyActive ? "Active" : "Expired",
        warrantyPdf: product.warrantyPdf
      }
    });
  } catch (error) {
    console.error("Warranty lookup error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to lookup warranty"
    });
  }
};

module.exports = {
  createProduct,
  getProductBySerialNumber
};
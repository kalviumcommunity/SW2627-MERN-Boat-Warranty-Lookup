const getProductBySerialNumber = (req, res) => {
  const { serialNumber } = req.params;

  if (!serialNumber || !serialNumber.trim()) {
    return res.status(400).json({
      success: false,
      message: "Serial number is required",
    });
  }

  res.status(200).json({
    success: true,
    product: {
      serialNumber: serialNumber.trim(),
      productName: "Boat X100",
      warrantyStatus: "Active",
      warrantyExpiry: "2027-06-15",
    },
  });
};

module.exports = {
  getProductBySerialNumber,
};
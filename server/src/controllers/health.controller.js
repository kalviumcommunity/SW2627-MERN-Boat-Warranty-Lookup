const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Boat Warranty API is running"
  });
};

module.exports = { healthCheck };
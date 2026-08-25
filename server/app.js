const express = require("express");
const cors = require("cors");

const healthRoutes = require("./src/routes/health.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/health", healthRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

module.exports = app;
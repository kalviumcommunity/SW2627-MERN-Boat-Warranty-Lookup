 feature/project-UI-setup
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
  
});

const PORT = process.env.PORT || 5000;
require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;
 feature/project-initial-setup
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  const adviceDetails = JSON.parse(fs.readFileSync("./data/advice.json"));
  res.status(200).json(adviceDetails);
});

module.exports = router;
const express = require("express");
const app = express();
const cors = require("cors");
const scores = require("./routes/scores");
const advice = require("./routes/advice");

// PORT
require("dotenv").config();
const port = 5000;

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// VIDEO.JS ROUTE
app.use("/scores", scores);
app.use("/advice", advice);

// SERVER LISTENING ON PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

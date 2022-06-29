const express = require("express");
const router = express.Router();
const fs = require("fs");

const readFromJSON = () => {
  return JSON.parse(fs.readFileSync("./data/scores.json"));
};

const writeToJSON = (scores) => {
  fs.writeFileSync("./data/scores.json", JSON.stringify(scores));
};

router.get("/", (req, res) => {
  const scoreDetails = JSON.parse(fs.readFileSync("./data/scores.json"));
  res.status(200).json(scoreDetails);
  console.log(scoreDetails);
});

router.post("/", (req, res) => {
  let { timestamp, sleep, fatigue, stress, soreness, motivation, total } =
    req.body;
  let newScores = {
    userId: 123,
    scores: [
      {
        timestamp,
        sleep,
        fatigue,
        stress,
        soreness,
        motivation,
        total,
      },
    ],
  };

  let scores = readFromJSON();
  scores.push(newScores);
  writeToJSON(scores);
  res.send("send");
});

module.exports = router;

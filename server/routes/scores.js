const express = require("express");
const router = express.Router();
// const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const readFromJSON = () => {
  return JSON.parse(fs.readFileSync('./data/scores.json'));
}

const writeToJSON = (scores) => {
  fs.writeFileSync('./data/scores.json', JSON.stringify(scores));
}

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
        total
      },
    ]

  }
  // console.log( timestamp, sleep, fatigue, stress, soreness, motivation, total );
  let scores = readFromJSON();
  console.log(scores[0].userId);
  scores.push(newScores);
  writeToJSON(scores);
  res.send("send");
});


module.exports = router;

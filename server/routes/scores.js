const express = require("express");
const router = express.Router();
// const filePath = './data/scores.json'
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const readFromJSON = () => {
  return JSON.parse(fs.readFileSync('./data/scores.json'));
}

const writeToJSON = () => {
  JSON.stringify(fs.writeFileSync('./data/scores.json', writeToJSON));
}

router.post("/", (req, res) => {
  let { timestamp, sleep, fatigue, stress, soreness, motivation, total } =
    req.body;
  let newScores = {
    userId: uuidv4(),
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
  scores.forEach((score) => {
    console.log(score);
  })
  res.send("send");
});


module.exports = router;

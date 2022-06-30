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
});

router.post("/", (req, res) => {
  // console.log(req.body);
  let { timestamp, sleep, fatigue, stress, soreness, motivation, total } =
    req.body;
  let existingScores = readFromJSON();
  foundUser = existingScores.find((score) => {
    return score.userId === 1234;
  });
  foundUser.scores.push({
    timestamp,
    sleep,
    fatigue,
    stress,
    soreness,
    motivation,
    total,
  });
  foundIndex = existingScores.indexOf(foundUser);
  console.log(`the scores array has a total of ${existingScores.length}`);
  console.log(`this is the indexof foundUser ${foundIndex}`);
  existingScores[foundIndex] = foundUser;
  console.log(existingScores);

  writeToJSON(existingScores);
  res.status(200).json(foundUser);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const fs = require("fs");

const readFromScoresJSON = () => {
  return JSON.parse(fs.readFileSync("./data/scores.json"));
};

const readFromAdviceJSON = () => {
  return JSON.parse(fs.readFileSync("./data/advice.json"));
};

let findFlags = (scores) => {
  let { timestamp, sleep, fatigue, stress, soreness, motivation, total } =
    scores;
  let advice = {
    sleep: false,
    fatigue: false,
    stress: false,
    soreness: false,
    motivation: false,
  };
  if (sleep < 3) {
    advice.sleep = true;
  }
  if (fatigue < 3) {
    advice.fatigue = true;
  }
  if (stress < 3) {
    advice.stress = true;
  }
  if (soreness < 3) {
    advice.soreness = true;
  }
  if (motivation < 3) {
    advice.motivation = true;
  }
  return advice;
};

let findCategory = (adviceObj) => {
  let categoryAdvice = readFromAdviceJSON();
  let keys = Object.keys(adviceObj);
  let filtered = keys.filter((key) => {
    return adviceObj[key];
  })
  let foundAdvice = categoryAdvice.filter((category) => {
    return filtered.includes(category.category);
  })
  return foundAdvice;
}

const writeToJSON = (scores) => {
  fs.writeFileSync("./data/scores.json", JSON.stringify(scores));
};

router.get("/", (req, res) => {
  const scoreDetails = JSON.parse(fs.readFileSync("./data/scores.json"));
  res.status(200).json(scoreDetails);
});

router.post("/", (req, res) => {
  console.log(findFlags(req.body));
  let advice = findFlags(req.body);
  console.log(findCategory(advice));

  let { timestamp, sleep, fatigue, stress, soreness, motivation, total } =
    req.body;
  let existingScores = readFromScoresJSON();
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
    advice: findCategory(advice)
  });
  foundIndex = existingScores.indexOf(foundUser);
  existingScores[foundIndex] = foundUser;

  writeToJSON(existingScores);
  res.status(200).json(foundUser);
});

module.exports = router;

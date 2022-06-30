import "./Survey.scss";
import { useState } from "react";
import axios from "axios";
import emoji1 from "../../assets/images/emoji-1.svg";
import emoji2 from "../../assets/images/emoji-2.svg";
import emoji3 from "../../assets/images/emoji-3.svg";
import emoji4 from "../../assets/images/emoji-4.svg";
import emoji5 from "../../assets/images/emoji-5.svg";

function Survey({ setGetStarted, setIsSurveyOpen, setFormSubmitted, updatedFeedback }) {
  const [sleep, setSleep] = useState(0);
  const [fatigue, setFatigue] = useState(0);
  const [stress, setStress] = useState(0);
  const [soreness, setSoreness] = useState(0);
  const [motivation, setMotivation] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submit Working");
    axios
      .post("http://localhost:5000/scores", {
        userId: 1234,
        timestamp: new Date().toLocaleString(),
        sleep: sleep,
        fatigue: fatigue,
        stress: stress,
        soreness: soreness,
        motivation: motivation,
        total: sleep + fatigue + stress + soreness + motivation,
      })
      .then(function (response)
       {
        let total = sleep + fatigue + stress + soreness + motivation;
        let advice = response.data.scores[21].advice[0].advice[0];
        console.log(advice);
        setSubmitted(true);
        setGetStarted(false);
        setIsSurveyOpen(false);
        setFormSubmitted(true);
        updatedFeedback(total, advice);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-container">
          <div className="form-section">
            <span className="form-category">Sleep</span>
            <span className="form-instruction">
              How well did you sleep last night?
            </span>
          </div>
          <label className="form-category__sleep form-buttons">
            <input
              type="radio"
              name="sleep"
              value={sleep}
              checked={sleep === 1}
              onChange={() => setSleep(1)}
            />
            <input
              type="radio"
              name="sleep"
              value={sleep}
              checked={sleep === 2}
              onChange={() => setSleep(2)}
            />
            <input
              type="radio"
              name="sleep"
              value={sleep}
              checked={sleep === 3}
              onChange={() => setSleep(3)}
            />
            <input
              type="radio"
              name="sleep"
              value={sleep}
              checked={sleep === 4}
              onChange={() => setSleep(4)}
            />
            <input
              type="radio"
              name="sleep"
              value={sleep}
              checked={sleep === 5}
              onChange={() => setSleep(5)}
            />
          </label>
          <div className="form-rating">
            <img
              className="form-rating__emoji"
              src={emoji1}
              alt="frowning face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji2}
              alt="worried face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji3}
              alt="neutral face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji4}
              alt="slightly smiling face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji5}
              alt="grinning face with big eyes emoji"
            />
          </div>
        </div>
        <div className="form-container">
          <div className="form-section">
            <span className="form-category">Fatigue</span>
            <span className="form-instruction">
              How energetic are you feeling?
            </span>
          </div>
          <label className="form-category__fatigue form-buttons">
            <input
              type="radio"
              name="fatigue"
              value={fatigue}
              checked={fatigue === 1}
              onChange={() => setFatigue(1)}
            />
            <input
              type="radio"
              name="fatigue"
              value={fatigue}
              checked={fatigue === 2}
              onChange={() => setFatigue(2)}
            />
            <input
              type="radio"
              name="fatigue"
              value={fatigue}
              checked={fatigue === 3}
              onChange={() => setFatigue(3)}
            />
            <input
              type="radio"
              name="fatigue"
              value={fatigue}
              checked={fatigue === 4}
              onChange={() => setFatigue(4)}
            />
            <input
              type="radio"
              name="fatigue"
              value={fatigue}
              checked={fatigue === 5}
              onChange={() => setFatigue(5)}
            />
          </label>
          <div className="form-rating">
            <img
              className="form-rating__emoji"
              src={emoji1}
              alt="frowning face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji2}
              alt="worried face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji3}
              alt="neutral face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji4}
              alt="slightly smiling face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji5}
              alt="grinning face with big eyes emoji"
            />
          </div>
        </div>
        <div className="form-container">
          <div className="form-section">
            <span className="form-category">Stress</span>
            <span className="form-instruction">
              How stressed/anxious are you today?
            </span>
          </div>
          <label className="form-category__stress form-buttons">
            <input
              type="radio"
              name="stress"
              value={stress}
              checked={stress === 1}
              onChange={() => setStress(1)}
            />
            <input
              type="radio"
              name="stress"
              value={stress}
              checked={stress === 2}
              onChange={() => setStress(2)}
            />
            <input
              type="radio"
              name="stress"
              value={stress}
              checked={stress === 3}
              onChange={() => setStress(3)}
            />
            <input
              type="radio"
              name="stress"
              value={stress}
              checked={stress === 4}
              onChange={() => setStress(4)}
            />
            <input
              type="radio"
              name="stress"
              value={stress}
              checked={stress === 5}
              onChange={() => setStress(5)}
            />
          </label>
          <div className="form-rating">
            <img
              className="form-rating__emoji"
              src={emoji1}
              alt="frowning face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji2}
              alt="worried face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji3}
              alt="neutral face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji4}
              alt="slightly smiling face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji5}
              alt="grinning face with big eyes emoji"
            />
          </div>
        </div>
        <div className="form-container">
          <div className="form-section">
            <span className="form-category">Soreness</span>
            <span className="form-instruction">
              How is your current physical state?
            </span>
          </div>
          <label className="form-category__soreness form-buttons">
            <input
              type="radio"
              name="soreness"
              value={soreness}
              checked={soreness === 1}
              onChange={() => setSoreness(1)}
            />
            <input
              type="radio"
              name="soreness"
              value={soreness}
              checked={soreness === 2}
              onChange={() => setSoreness(2)}
            />
            <input
              type="radio"
              name="soreness"
              value={soreness}
              checked={soreness === 3}
              onChange={() => setSoreness(3)}
            />
            <input
              type="radio"
              name="soreness"
              value={soreness}
              checked={soreness === 4}
              onChange={() => setSoreness(4)}
            />
            <input
              type="radio"
              name="soreness"
              value={soreness}
              checked={soreness === 5}
              onChange={() => setSoreness(5)}
            />
          </label>
          <div className="form-rating">
            <img
              className="form-rating__emoji"
              src={emoji1}
              alt="frowning face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji2}
              alt="worried face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji3}
              alt="neutral face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji4}
              alt="slightly smiling face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji5}
              alt="grinning face with big eyes emoji"
            />
          </div>
        </div>
        <div className="form-container">
          <div className="form-section">
            <span className="form-category">Motivation</span>
            <span className="form-instruction">
              How motivated are you for the day ahead?
            </span>
          </div>
          <label className="form-category__sleep form-buttons">
            <input
              type="radio"
              name="motivation"
              value={motivation}
              checked={motivation === 1}
              onChange={() => setMotivation(1)}
            />
            <input
              type="radio"
              name="motivation"
              value={motivation}
              checked={motivation === 2}
              onChange={() => setMotivation(2)}
            />
            <input
              type="radio"
              name="motivation"
              value={motivation}
              checked={motivation === 3}
              onChange={() => setMotivation(3)}
            />
            <input
              type="radio"
              name="motivation"
              value={motivation}
              checked={motivation === 4}
              onChange={() => setMotivation(4)}
            />
            <input
              type="radio"
              name="motivation"
              value={motivation}
              checked={motivation === 5}
              onChange={() => setMotivation(5)}
            />
          </label>
          <div className="form-rating">
            <img
              className="form-rating__emoji"
              src={emoji1}
              alt="frowning face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji2}
              alt="worried face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji3}
              alt="neutral face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji4}
              alt="slightly smiling face emoji"
            />
            <img
              className="form-rating__emoji"
              src={emoji5}
              alt="grinning face with big eyes emoji"
            />
          </div>
        </div>
        <div className="form-submit">
          <button
            onClick={() => {
              setSubmitted(true);
            }}
            className="form-submit__button"
          >
            Submit Your<br></br>Score!
          </button>
        </div>
      </form>
    </>
  );
}

export default Survey;

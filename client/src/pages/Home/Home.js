import "./Home.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Survey from "../../components/Survey/Survey";
import DailyTotal from "../../components/DailyTotal/DailyTotal";
import start from "../../assets/images/startbutton.svg";

function Home() {
  const [getStarted, setGetStarted] = useState(true);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scores, setScores] = useState(null);
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/scores").then((response) => {
      setScores(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/advice").then((response) => {
      setAdvice(response.data);
    });
  }, []);

  return (
    <>
      {getStarted && (
        <>
          <div className="welcome">
            <h2 className="welcome-header">Good Morning Eddie!</h2>
            <p className="welcome-message">
              Take 5 minutes to check in on yourself...
            </p>
          </div>
          <div className="welcome-start">
            <img
              className="welcome-start__image"
              src={start}
              alt="Finger pushing button"
            />
            <button
              className="welcome-start__button"
              onClick={() => {
                setIsSurveyOpen(true);
              }}
            >
              Start The<br></br>Survey!
            </button>
          </div>
        </>
      )}

      {isSurveyOpen && (
        <Survey
          setGetStarted={setGetStarted}
          setIsSurveyOpen={setIsSurveyOpen}
          setFormSubmitted={setFormSubmitted}
        />
      )}

      {formSubmitted && <DailyTotal scores={scores} advice={advice} />}
    </>
  );
}

export default Home;

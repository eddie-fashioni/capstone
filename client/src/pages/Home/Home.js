import "./Home.scss";
import { useState, useEffect, useRef } from "react";
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
  const [total, setTotal] = useState(0);

  const updatedFeedback = (totalFromSurvey, adviceFromScores) => {
    setTotal(totalFromSurvey);
    setAdvice(adviceFromScores);
  };

  const formRef = useRef(null);

  useEffect(() => {
    document.title = "Take5 | Home";
    axios.get("http://localhost:5000/scores").then((response) => {
      setScores(response.data);
    });
  }, [formSubmitted]);

  return (
    <>
      {getStarted && (
        <>
          <div className="welcome">
            <h2 className="welcome-header">Good Morning Eddie!</h2>
            <p className="welcome-message">
              Take 5 minutes to check in on yourself...<br></br>
              Click the button below and use the emoji scale to rate how you
              feel!
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
                formRef.current.scrollIntoView();
              }}
            >
              Start The<br></br>Survey!
            </button>
          </div>
        </>
      )}

      {isSurveyOpen && (
        <Survey
          formRef={formRef}
          setGetStarted={setGetStarted}
          setIsSurveyOpen={setIsSurveyOpen}
          setFormSubmitted={setFormSubmitted}
          updatedFeedback={updatedFeedback}
        />
      )}

      {formSubmitted && (
        <DailyTotal scores={scores} advice={advice} total={total} />
      )}
    </>
  );
}

export default Home;

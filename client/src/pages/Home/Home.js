import "./Home.scss";
import { useState } from "react";
import axios from "axios";
import Survey from "../../components/Survey/Survey";
import start from "../../assets/images/startbutton.svg";
import DailyTotal from "../../components/DailyTotal/DailyTotal";

function Home() {
  const [getStarted, setGetStarted] = useState(true);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // const getScores = () => {
  //   axios.get("http://localhost:5000/scores").then((response) => {
  //   });
  // };

  // Axios get req for all json data and pass as props down to Daily ScreenOrientation,
  // where I will filter / find the last obj in the array and use total score key

  // Axios get req for all advice json data to dsiaply cat random advice using if statement
  // based on socre of < 3

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

      {formSubmitted && <DailyTotal />}
    </>
  );
}

export default Home;

import "./Home.scss";
import { useState } from "react";
import Survey from "../../components/Survey/Survey";
import start from "../../assets/images/startbutton.svg";
import DailyTotal from "../../components/DailyTotal/DailyTotal";

function Home() {
  const [started, setStarted] = useState(false);
  const [getstarted, setGetStarted] = useState(true);
  const [issurveyopen, setIsSurveyOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      {getstarted && (
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

      {issurveyopen && (
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

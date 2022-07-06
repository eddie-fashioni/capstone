import "./Dash.scss";
import CategoryChart from "../../components/CategoryChart/CategoryChart";
import TotalChart from "../../components/TotalChart/TotalChart";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function Dash() {
  const [scores, setScores] = useState([]);

  const updatedFeedback = (scoresFromSurvey) => {
    setScores(scoresFromSurvey);
  };

  useEffect(() => {
    document.title = "Take5 | Dash";
    axios.get("http://localhost:5000/scores").then((response) => {
      setScores(response.data);
    });
  }, []);

  const dashRef = useRef(null);
  useEffect(() => {
    dashRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="summary" ref={dashRef}>
        <div className="summary-greeting">
          <h2 className="summary-header">Let's take a look, Eddie!</h2>
          <p className="summary-message">
            Check out your weekly roundup below.
          </p>
        </div>
        <CategoryChart updatedFeedback={updatedFeedback} scores={scores} />
        <TotalChart updatedFeedback={updatedFeedback} scores={scores} />
      </div>
    </>
  );
}

export default Dash;

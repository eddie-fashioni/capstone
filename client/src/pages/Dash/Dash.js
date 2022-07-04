import "./Dash.scss";
import CategoryChart from "../../components/CategoryChart/CategoryChart";
import TotalChart from "../../components/TotalChart/TotalChart";
import { useState, useEffect } from "react";
import axios from "axios";


function Dash() {
  const [scores, setScores] = useState(null);
  const [total, setTotal] = useState(0);

  const updatedFeedback = (scoresFromSurvey, totalFromSurvey) => {
    setScores(scoresFromSurvey);
    setTotal(totalFromSurvey);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/scores").then((response) => {
      setScores(response.data);
    });
  }, []);

  return (
    <>
      <div className="summary">
        <div className="summary-greeting">
        <h2 className="summary-header">Let's take a look, Eddie!</h2>
        <p className="summary-message">
          Check out your weekly roundup in the charts below. 
        </p>
        </div>
      <CategoryChart updatedFeedback={updatedFeedback} scores={scores}/>
      <TotalChart updatedFeedback={updatedFeedback} total={total}/>
      </div>
    </>
  );
}

export default Dash;
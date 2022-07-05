import "./Dash.scss";
import CategoryChart from "../../components/CategoryChart/CategoryChart";
import TotalChart from "../../components/TotalChart/TotalChart";
import { useState, useEffect } from "react";
import axios from "axios";

function Dash() {
  const [scores, setScores] = useState([]);
  // const [total, setTotal] = useState(0);

  const updatedFeedback = (scoresFromSurvey, totalFromSurvey) => {
    setScores(scoresFromSurvey);
    // setTotal(totalFromSurvey);
  };

  useEffect(() => {
    document.title = "Take5 | Dash";
    axios.get("http://localhost:5000/scores").then((response) => {
      setScores(response.data);
      // console.log(response.data);
    });
  }, []);

  // console.log(scores);

  return (
    <>
      <div className="summary">
        <div className="summary-greeting">
        <h2 className="summary-header">Let's take a look, Eddie!</h2>
        <p className="summary-message">
          Check out your weekly roundup below. 
        </p>
        </div>
      <CategoryChart updatedFeedback={updatedFeedback} scores={scores}/>
      <TotalChart updatedFeedback={updatedFeedback} scores={scores}/>
      </div>
    </>
  );
}

export default Dash;
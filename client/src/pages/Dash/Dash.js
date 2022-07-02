import ScoreChart from "../../components/ScoreChart/ScoreChart";
import "./Dash.scss";

function Dash() {

  return (
    <>
      <div className="summary">
        <div className="summary-greeting">
        <h2 className="summary-header">Here is how your looking this week Eddie!</h2>
        <p className="summary-message">
          Check out your weekly roundup in the chart below. 
        </p>
        </div>
      <ScoreChart/>
      </div>
    </>
  );
}

export default Dash;
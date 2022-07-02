import ScoreChart from "../../components/ScoreChart/ScoreChart";
import "./Dash.scss";

function Dash() {

  return (
    <>
      <div className="summary">
        <h2 className="summary-header">Here is how you're looking this week Eddie!</h2>
        <p className="summary-message">
          Check out your weekly roundup in the chart below. 
          <br></br>You will see our 5 categories listed from Monday-Sunday.
        </p>
      </div>
      <ScoreChart/>
    </>
  );
}

export default Dash;
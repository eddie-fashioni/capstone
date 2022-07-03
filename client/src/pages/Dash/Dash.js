import CategoryChart from "../../components/CategoryChart/CategoryChart";
import TotalChart from "../../components/TotalChart/TotalChart";
import "./Dash.scss";

function Dash() {

  return (
    <>
      <div className="summary">
        <div className="summary-greeting">
        <h2 className="summary-header">Let's take a look, Eddie!</h2>
        <p className="summary-message">
          Check out your weekly roundup in the charts below. 
        </p>
        </div>
      <CategoryChart/>
      <TotalChart/>
      </div>
    </>
  );
}

export default Dash;
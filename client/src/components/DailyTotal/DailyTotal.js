import "./DailyTotal.scss";
import flag from "../../assets/images/flag.svg";

const DailyTotal = () => {
  return (
    <section className="daily-total">
      <div className="total">
        <h2 className="total-header">Hey Eddie!</h2>
        <p className="total-message">Here is your feedback for today...</p>
      </div>
      <div className="score">
        <h1 className="score-header">Total Score</h1>
        <h1 className="score-total">21</h1>
        <p className="score-info">Score based statement here</p>
      </div>
      <div className="flag">
        <div className="flag-container">
          <img className="flag-image" src={flag} alt="Red flag" />
          <span className="flag-category">Category here</span>
        </div>
        <p className="flag-tip">Random piece of advice on given category</p>
      </div>
      <div className="feedback-confirm">
        <button className="feedback-confirm__button">
          See My<br></br>Summary!
        </button>
      </div>
    </section>
  );
};

export default DailyTotal;

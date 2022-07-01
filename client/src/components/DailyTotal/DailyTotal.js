import "./DailyTotal.scss";
import { Link } from "react-router-dom";
import flag from "../../assets/images/flag.svg";

const DailyTotal = ({ scores, advice, total }) => {
  
  
  //function that takes an array as an input and return one random element from array as output
  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
  }

  return (
    <section className="daily-total">
      <div className="total">
        <h2 className="total-header">Hey Eddie!</h2>
        <p className="total-message">Here is your feedback for today...</p>
      </div>
      <div className="desktop-container">
        <div className="score">
          <h1 className="score-header">Total Score</h1>
          <h1 className="score-total">{total}</h1>
          <p className="score-info">Score based statement here</p>
        </div>
        <div className="flag">
          {advice.map((advice) => {
            return (
              <>
                <div className="flag-container">
                  <img className="flag-image" src={flag} alt="Red flag" />
                  <span className="flag-category">{advice.category}</span>
                </div>
                <p className="flag-tip">{getRandomItem(advice.advice)}</p>
              </>
            );
          })}
        </div>
      </div>
      <div className="feedback-confirm">
        <Link to="/dashboard">
          <button className="feedback-confirm__button">
            See My<br></br>Summary!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DailyTotal;

import "./DailyTotal.scss";
import { Link } from "react-router-dom";
import flag from "../../assets/images/flag.svg";

const DailyTotal = ({ advice, total }) => {

  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
  }

//   const getColor = (score) => {
//     if (score < 11) return 'red';
//     if (score < 20) return 'yellow';
//     if (score >= 20) return 'green';
//     return '';
// };

//   let scoreStatement = total;
// if (scoreStatement < 11) {
//   return "Bad"
// } else if (scoreStatement < 20) {
//   return "OK";
// } else {
//   return "Great";
// }

  return (
    <section className="daily-total">
      <div className="total">
        <h2 className="total-header">Hey Eddie!</h2>
        <p className="total-message">Here is your feedback for today...</p>
      </div>
      <div className="desktop-container">
        <div className="score">
          <h1 className="score-header">Total Score</h1>
          {/* style={{ color: getColor }} */}
          <div className="score-border"></div>
          <h1 className="score-total">{total}</h1>
          {/* <p className="score-info">{scoreStatement()}</p> */}
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
        <Link to="/dash">
          <button className="feedback-confirm__button">
            See My<br></br>Summary!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DailyTotal;

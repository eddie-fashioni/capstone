import "./DailyTotal.scss";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import flag from "../../assets/images/flag.svg";
import finger from "../../assets/images/finger.svg";

const DailyTotal = ({ advice, total }) => {
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
  }

  const scoreRef = useRef(null);
  useEffect(() => {
    scoreRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const getBorderColor = (total) => {
    if (total >= 20) {
      return { border: "5px solid #8ec127" };
    } else if (total < 20 && total >= 11) {
      return { border: "5px solid #FFBF00" };
    } else {
      return { border: "5px solid #d41243" };
    }
  };

  const getColor = (total) => {
    if (total >= 20) {
      return { color: "#8ec127" };
    } else if (total < 20 && total >= 11) {
      return { color: "#FFBF00" };
    } else {
      return { color: "#d41243" };
    }
  };

  const getFeedback = (total) => {
    if (total >= 20) {
      return "Amazing! Glad to see you're feeling good today. Remember that consistency is key, so if you have any flags above, make sure to work on that and keep doing what you're doing!";
    } else if (total < 20 && total >= 11) {
      return "You're not doing too badly but you definitely have some things to work on! If you have any flags above then really focus your efforts on those areas today.";
    } else {
      return "Sorry to see that you're not feeling too great right now. Check out the flags above and try to implement the advice today, so that we can get you feeling better again tomorrow!";
    }
  };

  return (
    <>
      <section className="daily-total" ref={scoreRef}>
        <div className="total">
          <h2 className="total-header">Hey Eddie!</h2>
          <p className="total-message">Here is your feedback for today...</p>
        </div>
        <div className="desktop-container">
          <div className="score">
            <h1 className="score-header">Total Score</h1>
            <div className="score-border" style={getBorderColor(total)}></div>
            <h1 className="score-total" style={getColor(total)}>
              {total}
            </h1>
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
        <div className="flag-help">
          <img
            className="flag-help__image"
            src={finger}
            alt="finger pointing right"
          />
          <p className="flag-help__message">
          {getFeedback(total)}
          </p>
        </div>
        <div className="feedback-confirm">
          <Link to="/dash">
            <button className="feedback-confirm__button">
              See My<br></br>Summary!
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default DailyTotal;

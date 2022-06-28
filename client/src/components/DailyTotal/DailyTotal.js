import "./DailyTotal.scss";
import flag from "../../assets/images/flag.svg"

const DailyTotal = () => {
  return (
    <section className="daily-total">
    <div className="total">
    <h2 className="total-header">Hey Eddie!</h2>
    <p className="total-message">Here is your summary for today...</p>
    </div>
    <div className="score">
    <h1 className="score-header">Total Score</h1>
    <h1 className="score-total">21</h1>
    <p className="score-info">Conditional Based Statement Here</p>
    </div>
    <div className="flag">
      <img className="flag-image" src= { flag } alt="Red flag"/>
    </div>
    </section>
  )
}

export default DailyTotal
import { Component } from "react";
import DailyTotal from "../../components/DailyTotal/DailyTotal";
import Survey from "../../components/Survey/Survey";
import "./Home.scss";
import start from "../../assets/images/startbutton.svg";

class Home extends Component {
  state={
    surveyOpen: false,
  }

  handleStart = () => {
    this.setState({
      surveyOpen: true,
    })
  }

  render() {
    return (
      <>
        <div className="welcome">
          <h2 className="welcome-header">Good Morning Eddie!</h2>
          <p className="welcome-message">
            Take 5 minutes to check in on yourself...
          </p>
        </div>
        <div className="welcome-start">
        <img className="welcome-start__image" src={start} alt="Finger pushing button"/>
          <button className="welcome-start__button" onClick={this.handleStart}>
            Start The<br></br>Survey!
          </button>
      </div>
        {this.state.surveyOpen && <Survey />}
      </>
    );
  }
}

export default Home;
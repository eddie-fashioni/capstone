import { Component } from "react";
import Survey from "../../components/Survey/Survey";
import "./Home.scss";

class Home extends Component {
  state = {
  };

componentDidMount() {

}

render() {
  return (
    <>
    <div className="welcome">
    <h2 className="welcome-message">Good Morning Eddie!</h2>
    </div>
    <Survey />
    </>
  )
}

}

export default Home
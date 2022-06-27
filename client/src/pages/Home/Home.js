import { Component } from "react";
import Survey from "../../components/Survey/Survey";
import "./Home.scss";

class Home extends Component {
//   state = {
//   };

// componentDidMount() {

// }

render() {
  return (
    <>
    <div className="welcome">
    <h2 className="welcome-header">Good Morning Eddie!</h2>
    <p className="welcome-message">Take 5 minutes to check in on yourself...</p>
    </div>
    <Survey/>
    </>
  )
}

}

export default Home
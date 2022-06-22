import "./App.scss";
import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader.js";
// import Home from "./pages/Home/Home";
// import Feedback from "./pages/Feedback/Feedback";
// import Dashboard from "./pages/Dashboard/Dashboard";

document.title = "Take5";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <PageHeader />
          {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Feedback" component={Feedback} />
            <Route path="/Dashboard" component={Dashboard} />
          </Switch> */}
        </BrowserRouter>
      </>
    );
  }
}

export default App;
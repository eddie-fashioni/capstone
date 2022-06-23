import "./App.scss";
import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader.js";
// import Home from "./pages/Home/Home";
// import Score from "./pages/Score/Score";
// import Dash from "./pages/Dash/Dash";

document.title = "Take5";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <PageHeader />
          {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/score" component={Score} />
            <Route path="/dash" component={Dash} />
          </Switch> */}
        </BrowserRouter>
      </>
    );
  }
}

export default App;
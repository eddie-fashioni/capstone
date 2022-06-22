// import "./App.scss";
import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import PageHeader from "./components/PageHeader/PageHeader.js";
// import Home from "./pages/Home/Home";
// import Upload from "./pages/Upload/Upload";

document.title = "Take5";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          {/* <PageHeader /> */}
          <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            {/* <Route path="/Upload" component={Upload} />
            <Route path="/videos/:id" component={Home} /> */}
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
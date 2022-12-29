import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GistDetails from "./routes/Detail";
import Home from "./routes/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact={true} component={Home} />
        <Route path="/:id" component={GistDetails} />
      </Router>
    );
  }
}

export default App;

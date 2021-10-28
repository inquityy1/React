import React, { Component } from "react";
import About from "./About";
import { Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;

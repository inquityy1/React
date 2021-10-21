import React, { Component } from "react";
// import ScoreKeeper from "./ScoreKeeper";
import Ball from "./Ball";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ball num={17} />
      </div>
    );
  }
}

export default App;

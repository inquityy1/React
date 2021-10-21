import React, { Component } from "react";
import Game from "./Game";
import Demo from "./Demo";
import Rando from "./Rando";
import BrokenClick2 from "./BrokenClick";
import RandNum from "./RandNum";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RandNum />
      </div>
    );
  }
}

export default App;

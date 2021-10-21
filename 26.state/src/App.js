import React, { Component } from "react";
import Game from "./Game";
import Game2 from "./Game2";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
        <Game2 />
      </div>
    );
  }
}

export default App;

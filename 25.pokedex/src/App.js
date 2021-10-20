import React, { Component } from "react";
import Pokedex from "./Pokedex";
import Pokecard from "./Pokecard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}

export default App;

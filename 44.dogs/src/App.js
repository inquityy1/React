import React, { Component } from "react";
import DogList from "./DogList";
import { Switch, Route } from "react-router-dom";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";

import "./App.css";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn",
          "Whiskey loves eating popcorn",
          "Whiskey loves eating popcorn",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel loves eating kids",
          "Hazel loves eating kids",
          "Hazel loves eating kids",
        ],
      },
      {
        name: "Tubby",
        age: 5,
        src: tubby,
        facts: [
          "Tubby loves eating meat",
          "Tubby loves eating meat",
          "Tubby loves eating meat",
        ],
      },
    ],
  };

  render() {
    return (
      <Route path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
    );
  }
}

export default App;

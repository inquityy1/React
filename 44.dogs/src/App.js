import React, { Component } from "react";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Navbar from "./Navbar";
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
          "Hazel loves eating cells",
          "Hazel loves eating humans",
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
    const getDog = (props) => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        (dog) => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />;
    };

    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <Switch>
          <Route
            path="/dogs"
            exact
            render={() => <DogList dogs={this.props.dogs} />}
          />
          <Route path="/dogs/:name" exact render={getDog} />
        </Switch>
      </div>
    );
  }
}

export default App;

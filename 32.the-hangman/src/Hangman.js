import React, { Component } from "react";

import "./Hangman.css";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [""],
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: "apple" };
    // this.handleGuess = this.handleGuess.bind(this);
  }

  /** guessedWord: show current-state of word:
   * if guessed letters are {a,p,e}, show "app_e" for "apple"
   */

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Hangman;

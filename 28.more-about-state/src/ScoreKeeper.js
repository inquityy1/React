import React, { Component } from "react";

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
    this.singleKill = this.singleKill.bind(this);
  }

  singleKill() {
    //Not a good idea to update state like this
    //if it relies on existing state values
    this.setState({ score: this.state.score + 1 });
  }

  //   tripleKill() {
  //     this.setState({ score: this.state.score + 1 });
  //     this.setState({ score: this.state.score + 2 });
  //     this.setState({ score: this.state.score + 1 });
  //   }

  //   tripleKill() {
  //     this.setState((st) => {
  //       return { score: st.score + 1 };
  //     });

  //     this.setState((st) => {
  //       return { score: st.score + 1 };
  //     });

  //     this.setState((st) => {
  //       return { score: st.score + 1 };
  //     });
  //   }

  incrementScore(oldState) {
    return { score: oldState.score + 1 };
  }

  tripleKill() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={() => this.tripleKill()}>Triple Kill!</button>
      </div>
    );
  }
}

export default ScoreKeeper;

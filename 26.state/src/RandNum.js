import React, { Component } from "react";

class RandNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    this.genRandom = this.genRandom.bind(this);
  }
  genRandom() {
    //pick random number 1-10
    let rand = Math.floor(Math.random() * 10) + 1;
    //update state with new rand
    this.setState({ number: rand });
  }

  render() {
    return (
      <div>
        <h1>Number is: {this.state.number}</h1>
        {this.state.number === 7 ? (
          <h2>YOU WIN!</h2>
        ) : (
          <button onClick={this.genRandom}>Random Number</button>
        )}
        {/* {this.state.number === 7 && <h2>YOU WIN!</h2>}
        {this.state.number !== 7 && (
          <button onClick={this.genRandom}>Random Number</button>
        )} */}
        {/* {this.state.number === 7 ? <h2>YOU WIN!</h2> : ""} */}
        {/* {this.state.number !== 7 ? (
          <button onClick={this.genRandom}>Random Number</button>
        ) : (
          ""
        )} */}
      </div>
    );
  }
}

export default RandNum;

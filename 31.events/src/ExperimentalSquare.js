import React, { Component } from "react";
import "./WiseSquare.css";

class ExperimentalSquare extends Component {
  static defaultProps = {
    messages: ["I just wanna die pls kill me"],
  };
  dispenseWisdom = () => {
    console.log("THIS IS...", this);
    let { messages } = this.props;
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  };
  render() {
    return (
      <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>
        :D
      </div>
    );
  }
}

export default ExperimentalSquare;

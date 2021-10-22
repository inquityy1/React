import React, { Component } from "react";
import "./WiseSquare.css";

class WiseSquare extends Component {
  dispenseWisdom() {
    let messages = ["I just wanna die pls kill me"];
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  }
  render() {
    return (
      <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>
        :D
      </div>
    );
  }
}

export default WiseSquare;

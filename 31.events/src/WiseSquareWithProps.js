import React, { Component } from "react";
import "./WiseSquare.css";

class WiseSquareWithProps extends Component {
  constructor(props) {
    super(props);
    this.dispenseWisdom = this.dispenseWisdom.bind(this);
  }
  static defaultProps = {
    messages: ["I just wanna die pls kill me"],
  };
  dispenseWisdom() {
    console.log("THIS IS...", this);
    let { messages } = this.props;
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

export default WiseSquareWithProps;

import React, { Component } from "react";

class CopyDemo extends Component {
  handleCopy() {
    alert("STOP STEALING");
  }

  render() {
    return (
      <div>
        <h3>Try Copying Some of this TextL:</h3>
        <section
          onCopy={this.handleCopy}
          style={{ width: "300px", display: "inline-block" }}
        >
          SOME RANDOM TEXT THAT IS NOT VALUABLE SO JUST SCROOL ON
        </section>
      </div>
    );
  }
}
export default CopyDemo;

import React, { Component } from "react";

class AnnoyingForm extends Component {
  handleKeyUp(evt) {
    if (evt.keyCode === 56) {
      alert("U ARE FUCKING DONE");
    } else {
      alert("BOOO");
    }
  }
  render() {
    return (
      <div>
        <h3>Try Typing In Here:</h3>
        <textarea onKey={this.handleKeyUp} />
      </div>
    );
  }
}

export default AnnoyingForm;

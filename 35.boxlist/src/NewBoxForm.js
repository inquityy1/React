import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.createBox(newBox);
    this.setState({
      height: "",
      width: "",
      color: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
            id="height"
          ></input>
        </div>

        <div>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
            id="width"
          ></input>
        </div>

        <div>
          <label htmlFor="color">color</label>
          <input
            type="text"
            name="color"
            value={this.state.color}
            onChange={this.handleChange}
            id="color"
          ></input>
        </div>
        <button>Add New Box!</button>
      </form>
    );
  }
}

export default NewBoxForm;

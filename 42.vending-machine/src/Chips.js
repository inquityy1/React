import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

export default class Chips extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>Chips</h1>
          <Link exact to="/">
            BACK
          </Link>
        </Message>
      </div>
    );
  }
}

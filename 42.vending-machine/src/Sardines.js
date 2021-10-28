import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

export default class Sardines extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>Sardines</h1>
          <Link exact to="/">
            BACK
          </Link>
        </Message>
      </div>
    );
  }
}

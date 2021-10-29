import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    alert("LOGGED YOU IN!");
    this.props.history.push("/Food/salmon");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>Log In</button>
      </div>
    );
  }
}

export default withRouter(Navbar);

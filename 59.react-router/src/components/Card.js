import React, { Component } from "react";

class Card extends Component {
  //   state = { user: "" };

  //   componentDidMount() {
  //     let user = this.props.match.params.user;
  //     this.setState({ user });
  //   }

  render() {
    // const { user } = this.state;
    return (
      <div
        style={{ marginTop: "80px" }}
        className="ui raised very padded text container segment"
      >
        <h3 className="ui header">{/*{user}*/}</h3>
      </div>
    );
  }
}

export default Card;

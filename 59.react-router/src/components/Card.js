import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
  //   state = { user: "" };

  //   componentDidMount() {
  //     let user = this.props.match.params.user;
  //     this.setState({ user });
  //   }

  render() {
    // const { user } = this.state;
    // const { title, body } = this.props.card;
    return (
      <div
        style={{ marginTop: "80px" }}
        className="ui raised very padded text container segment"
      >
        {<h3 className="ui header"> {/*{this.title}*/}</h3>}
        <p>{/*{this.body}*/}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let title = ownProps.user;
  return {
    card: state.cards.find((card) => card.title === title),
  };
};

export default connect(mapStateToProps)(Card);

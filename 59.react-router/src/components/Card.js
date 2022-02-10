import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
  //   state = { user: "" };

  //   componentDidMount() {
  //     let user = this.props.match.params.user;
  //     this.setState({ user });
  //   }

  onButtonClick = () => {
    // let id = this.props.card.id;
    this.props.deleteCard(1);
  };

  render() {
    // const { user } = this.state;
    // const { title, body } = this.props.card;
    console.log(this.props);
    return (
      <div
        style={{ marginTop: "80px" }}
        className="ui raised very padded text container segment"
      >
        {<h3 className="ui header"> {/*{this.title}*/}Title:</h3>}
        <p>{/*{this.body}*/}Lorem ipsum text:</p>
        <button
          className="ui primary right floated button"
          onClick={this.onButtonClick}
        >
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // let title = ownProps.match.params.user
  let title = ownProps.user;
  return {
    card: state.cards.find((card) => card.title === title),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => {
      dispatch({ type: "DELETE_CARD", id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

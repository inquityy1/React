import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCard, fetchUsers } from "../actions/cardActions";

class Card extends Component {
  //   state = { user: "" };
  //   componentDidMount() {
  //     let user = this.props.match.params.user;
  //     this.setState({ user });
  //   }

  componentDidMount() {
    this.props.fetchUsers();
  }

  onButtonClick = () => {
    // let id = this.props.card.id;
    this.props.deleteCard(1);
  };

  render() {
    console.log(this.props.users);
    // const { user } = this.state;
    // const { title, body } = this.props.card;
    const { users } = this.props;
    return users.map((user) => {
      return (
        <div
          key={user.id}
          style={{ marginTop: "80px" }}
          className="ui raised very padded text container segment"
        >
          {
            <h3 className="ui header">
              {" "}
              {/*{this.title}*/}
              {user.name}
            </h3>
          }
          <p>
            {/*{this.body}*/}
            {user.email}
          </p>
          <button
            className="ui primary right floated button"
            onClick={this.onButtonClick}
          >
            Delete
          </button>
        </div>
      );
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  // let title = ownProps.match.params.user
  let title = ownProps.user;
  return {
    card: state.cards.find((card) => card.title === title),
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => {
      dispatch(deleteCard(id));
    },
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

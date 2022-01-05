import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import history from "../../../../history";

class Delete extends React.Component {
  renderActions() {
    return (
      <React.Fragment>
        <button
          className="ui button"
          style={{
            border: "none",
            backgroundColor: "red",
            borderRadius: "5px",
            width: "150px",
            marginRight: "20px",
          }}
        >
          Yes
        </button>
        <Link
          to="/dashboard"
          className="ui button"
          style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            width: "150px",
            marginRight: "20px",
          }}
        >
          No
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure?`;
  }

  x() {
    return (
      <React.Fragment>
        <Link to="/">X</Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        x={this.x()}
      />
    );
  }
}

export default Delete;

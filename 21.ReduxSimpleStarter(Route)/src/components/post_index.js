import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div>Posts Index</div>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostIndex);

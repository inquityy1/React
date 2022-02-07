import React from "react";
import profile1 from "./imgs/picture-1.jpg";

const SingleComment = ({ pic }) => {
  return (
    <div className="ui comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={pic} alt="profile picture" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sarah
          </a>
          <div className="metadata">
            <span className="date">Today at 5:00</span>
          </div>
          <div className="text">it's amazing</div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;

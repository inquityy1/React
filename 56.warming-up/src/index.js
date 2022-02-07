import React from "react";
import ReactDOM from "react-dom";
import pic1 from "./imgs/picture-1.jpg";
import pic2 from "./imgs/picture-2.jpg";
import pic3 from "./imgs/picture-3.jpg";

const App = function () {
  return (
    <div className="ui comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={pic1} alt="profile picture" />
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

ReactDOM.render(<App />, document.querySelector("#root"));

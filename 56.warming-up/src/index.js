import React from "react";
import ReactDOM from "react-dom";
import pic1 from "./imgs/picture-1.jpg";
import pic2 from "./imgs/picture-2.jpg";
import pic3 from "./imgs/picture-3.jpg";
import SingleComment from "./SingleComment";

const App = function () {
  return (
    <div className="ui comments">
      <SingleComment pic={pic1} />
      <SingleComment pic={pic2} />
      <SingleComment pic={pic3} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

import React from "react";
import ReactDOM from "react-dom";
import pic1 from "./imgs/picture-1.jpg";
import pic2 from "./imgs/picture-2.jpg";
import pic3 from "./imgs/picture-3.jpg";
import SingleComment from "./SingleComment";

const App = function () {
  return (
    <div className="ui comments">
      <SingleComment
        name="Alex"
        date="Today at 5:00PM"
        text="It is amazing"
        pic={pic1}
      />
      <SingleComment
        name="Jack"
        date="Today at 6:00PM"
        text="Great job"
        pic={pic2}
      />
      <SingleComment
        name="Sarah"
        date="Today at 7:00PM"
        text="Thanks..."
        pic={pic3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

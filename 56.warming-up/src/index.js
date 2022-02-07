import React from "react";
import ReactDOM from "react-dom";

const App = function () {
  return (
    <div>
      <p>hello world</p>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is realy working</p>
    </div>
    // <h1>Something</h1> -doesnt work
  );
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", { className: "App" }, "Does this work now?")
  // );
}

export default App;

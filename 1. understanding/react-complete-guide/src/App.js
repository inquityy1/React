import React from "react";
import "./App.css";
import Person from "./Person/Person.js";

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is realy working</p>
      <Person name="Max" age="28" />
      <Person name="Manu" age="29">
        My Hobbies: Racing
      </Person>
      <Person name="Stephanie" age="26" />
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

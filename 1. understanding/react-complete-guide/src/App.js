import React from "react";
import "./App.css";
import Person from "./Person/Person.js";

function App() {
  state = {
    persons: [
      { name: 'Max', age: 28  },
      { name: 'Mnu', age: 29  }
      { name: 'Stephanie', age: 26 }
    ]
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is realy working</p>
      <button>Switch Name</button>
      <Person name={this.state.person[0].name} age={this.state.person[0].age} />
      <Person name={this.state.person[1].name} age={this.state.person[1].age}>
        My Hobbies: Racing
      </Person>
      <Person name={this.state.person[2].name} age={this.state.person[2].age} />
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

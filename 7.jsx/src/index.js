// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click on me!";
}

// class App extends React.Component

// Create a react component
const App = () => {
  return (
    <div>
      <label className="label">Enter name:</label>
      <input id="name" type="text " />
      {/* <button style="background-color: blue; color: white;">Submit</button> */}
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

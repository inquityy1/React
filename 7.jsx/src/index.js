// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = { text: "Click me" };
  const style = { backgroundColor: "blue", color: "white" };
  const labelText = "Enter name:";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text " />
      {/* <button style="background-color: blue; color: white;">Submit</button> */}
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

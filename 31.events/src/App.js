import React from "react";
import WiseSquare from "./WiseSquare";
import AnnoyingForm from "./AnnoyingForm";
import CopyDemo from "./CopyDemo";
import WiseSquareWithProps from "./WiseSquareWithProps";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Events!!</h1>
      <WiseSquare />
      <AnnoyingForm />
      <CopyDemo />
      <WiseSquareWithProps />
    </div>
  );
}

export default App;

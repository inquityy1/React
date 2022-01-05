import React, { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>click me</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default UseState;

import React, { useState } from "react";

export default function UseReducer() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click Here
      </button>

      {showText && <p>This is a text</p>}
    </div>
  );
}

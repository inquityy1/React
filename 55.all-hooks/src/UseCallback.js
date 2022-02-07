import React, { useState, useCallback } from "react";
import Child from "./Child";

function UseCallback() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, sup u doin?");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  );
}

export default UseCallback;

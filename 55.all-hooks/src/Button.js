import React, { forwardRef, useImperativeHandle, useState } from "react";

function Button() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Button From Child
      </button>
      {toggle && <span>Toggle</span>}
    </>
  );
}

export default Button;

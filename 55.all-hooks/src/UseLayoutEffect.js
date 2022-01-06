import React, { useLayoutEffect, useEffect, useRef } from "react";

function UseLayoutEffect() {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    console.log(divRef.current.value);
  }, []);

  useEffect(() => {
    divRef.current.value = "HELLO";
  }, []);

  return (
    <div>
      <input ref={divRef} value="PEDRO" />
    </div>
  );
}

export default UseLayoutEffect;

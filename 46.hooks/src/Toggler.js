import React, { useState } from "react";
import useToggle from "./hooks/useToggle";

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHearthBroken, toggleIsHearthBroken] = useToggle(true);
  const [isBanana, toggleIsBanana] = useToggle(false);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? ":-)" : "-_-"}</h1>
      <h1 onClick={toggleIsHearthBroken}>{isHearthBroken ? "</3" : "<3"}</h1>
      <h1 onClick={toggleIsBanana}>{isBanana ? "no banana" : "banana"}</h1>
    </div>
  );
}

export default Toggler;

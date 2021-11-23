import { useState } from "react";
function useToggleState(initialVal = false) {
  // call useState
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state);
  };
  // return piece of state AND a function to toggle it
  return [state, toggle];
}

export default useToggleState;

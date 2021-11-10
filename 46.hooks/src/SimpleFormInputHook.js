import React from "react";
import useInputState from "./hooks/useInputState";

export default function SimpleFormInputHooks() {
  const [email, updateEmail, resetEmail] = useInputState("");
  const [password, updatepassword, resetpassword] = useInputState("");
  return (
    <div>
      <h1>
        The value is: {email} <br /> & <br /> Password is: {password}{" "}
      </h1>
      <div>
        <input type="text" value={email} onChange={updateEmail} />
        <button onClick={resetEmail}>Submit</button>
      </div>
      <div>
        <input type="text" value={password} onChange={updatepassword} />
        <button onClick={resetpassword}>Submit</button>
      </div>
    </div>
  );
}

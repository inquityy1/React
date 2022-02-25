import React, { useState } from "react";
import Todo from "./Todo";

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <Todo />}
      <button
        className="btn btn-primary"
        onClick={() => setShowTodo(!showTodo)}
      >
        Click
      </button>
    </div>
  );
}

export default UseRefExample3;

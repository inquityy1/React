import React, { createContext, useReducer } from "react";

export const TodoListContext = createContext();

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.text, id: Math.random() }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== Number(action.id));
    default:
      return state;
  }
};

const TodoListContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, [
    { text: "Plan the family trip", id: 1 },
    { text: "Go shopping for dinner", id: 4 },
    { text: "Go for a walk", id: 3 },
  ]);

  return (
    <TodoListContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;

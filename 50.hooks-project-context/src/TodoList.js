import React, { useContext } from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import { TodosContext } from "./context/todos.context";

function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 && <divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;

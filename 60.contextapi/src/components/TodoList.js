import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoListContext } from "../context/TodoListContext";

// class TodoList extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;
//     return (
//       <div
//         style={{
//           background: theme.background,
//           color: theme.text,
//           height: "140px",
//           textAlign: "center",
//         }}
//       >
//         <p className="item">Plan the family trip</p>
//         <p className="item">Go for shopping for dinner</p>
//         <p className="item">Go for a walk</p>
//         <button className="ui button primary" onClick={changeTheme}>
//           Change theme!
//         </button>
//       </div>
//     );
//   }
// }

const TodoList = () => {
  const { todos } = useContext(TodoListContext);
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        height: "140px",
        textAlign: "center",
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p key={todo.id} className="item">
              {todo.text}
            </p>
          );
        })
      ) : (
        <div>You have no todos</div>
      )}
      <button className="ui button primary" onClick={changeTheme}>
        Change theme!
      </button>
    </div>
  );
};

export default TodoList;

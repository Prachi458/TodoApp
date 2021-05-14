import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;

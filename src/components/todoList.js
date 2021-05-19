import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, setTodos, filteredTodos, searchText }) => {
  let searchedTodos;

  if (searchText !== "") {
    searchedTodos = filteredTodos.filter((tag) =>
      tag.inputTags.includes(searchText)
    );
  }
  if (searchText === "") {
    searchedTodos = filteredTodos;
  }

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {searchedTodos.map((todo) => (
          <Todo
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            id={todo.id}
            inputTags={todo.inputTags}
            filteredTodos={filteredTodos}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;

import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import TodoList from "./components/todoList";
import Search from "./components/search";

function App() {
  const [inputText, setInputText] = useState("");
  const [tag, setTag] = useState("");
  const [todos, setTodos] = useState([]);
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [newArray, setNewArray] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filteredhandler();
    saveLocalTodos();
  }, [todos, status]);

  const filteredhandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        tags={tags}
        setTags={setTags}
      />
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
        tags={tags}
        tag={tag}
        setTag={setTag}
        setTags={setTags}
        newArray={newArray}
        setNewArray={setNewArray}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        tags={tags}
        setTags={setTags}
        searchText={searchText}
        setSearchText={setSearchText}
      />
    </div>
  );
}

export default App;

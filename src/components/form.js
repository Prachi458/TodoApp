import React from "react";
import "./styles/tagInput.scss";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  tags,
  setTags,
  tag,
  setTag,
  newArray,
  setNewArray,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const inputTagsHandler = (e) => {
    setTag(e.target.value);
  };

  const addTags = (event) => {
    setTag("");
    if (event.target.value !== "") {
      let updatedTags = [...tags, tag];
      let newArray = updatedTags;
      setNewArray(newArray);
      console.log(updatedTags);
      console.log("updated tags", updatedTags);
      setTags(updatedTags);
    }
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (e.target.value !== "") {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
          inputTags: tags,
        },
      ]);
      setInputText("");
      setTags("");
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitTodoHandler}>
        <input
          type="text"
          className="todo-input"
          onChange={inputTextHandler}
          value={inputText}
          required
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <input
          style={{ marginLeft: "20px" }}
          type="text"
          onKeyUp={(e) => (e.key === "Enter" ? addTags(e) : null)}
          placeholder="Press enter to add tags"
          value={tag}
          onChange={inputTagsHandler}
        />
        <button type="submit" style={{ "margin-left": "20px" }}>
          Add Todo
        </button>
        <br />
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <div className="tags-input">
        <ul id="output-tag">
          {newArray.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Form;

import React, { useState, useEffect } from "react";

// create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  const [item, setItem] = useState("task");

  function getInfo() {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/leilanta")
      .then((response) => response.json())
      .then((data) => {
        // Aquí deberías actualizar el estado de tus todos
        setTodos(data);
      })
  }

  useEffect(() => {
    console.log("se cargo");
    getInfo();
  }, []);

  return (
    <div className="container justify-content-center bg-light rounded-3 p-5 m-5 shadow">
      <h1 className="d-flex justify-content-center mb-5">To-do's</h1>
      <div className="row justify-content-center">
        <ul className="col justify-content-center">
          <li>
            <textarea
              onChange={(x) => setInputValue(x.target.value)}
              value={inputValue}
              onKeyDown={(x) => {
                if (x.key === "Enter" && inputValue.trim() !== "") {
                  setTodos(todos.concat(inputValue.trim()));
                  setInputValue("");
                } else if (todos.length === 0) {
                  setItem(" tasks, add a task");
                } else if (todos.length === 1) {
                  setItem(" task");
                } else {
                  setItem("tasks");
                }
              }}
              placeholder="You go, girl!"
            ></textarea>
          </li>
          {todos.map((item, index) => (
            <li className="submittedTodos" key={index}>
              {item.label}{" "}
              <a
                className="icono d-flex justify-content-end"
                onClick={() => deleteTodo(index)}
              >
                🗑️
              </a>
              {""}
            </li>
          ))}
        </ul>
        <p>
          {todos.length} {item}
        </p>
      </div>
    </div>
  );
};

export default Home;

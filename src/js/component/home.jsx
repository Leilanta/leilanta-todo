import React, { useState, useEffect } from "react";

// create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("task");

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  function getInfo() {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/leilanta") 
      .then((response) => response.json())
      .then((data) => {
        // Aquí deberías actualizar el estado de tus todos
        setTodos(data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }

  useEffect(() => {
    console.log("se cargó");
    getInfo();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTodos([...todos, { title: inputValue.trim() }]);
      setInputValue("");
    }
  };

  return (
    <div className="container justify-content-center bg-light rounded-3 p-5 m-5 shadow">
      <h1 className="d-flex justify-content-center mb-5">To-do's</h1>
      <div className="row justify-content-center">
        <ul className="col justify-content-center">
          <li>
            <textarea
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onKeyDown={handleKeyDown}
              placeholder="You go, girl!"
            ></textarea>
          </li>
          {todos.map((item, index) => (
            <li className="submittedTodos" key={index}>
              {item.title}{" "}
              <a
                className="icono d-flex justify-content-end"
                onClick={() => deleteTodo(index)}
              >
                🗑️
              </a>
            </li>
          ))}
        </ul>
        <p>
          {todos.length} {todos.length === 1 ? "task" : "tasks"}
        </p>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";

import NewTodo from "./Components/newTodo/index";
import TaskSection from "./Components/TaskSection/index";

import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const onNewTodo = (value) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
        <TaskSection todos={todos} setTodos={setTodos} />
      </section>
    </section>
  );
};

export default App;

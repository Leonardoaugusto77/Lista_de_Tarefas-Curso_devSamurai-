import { useState } from "react";
import index from "./index.css";

export default function App() {
  const [value, setValue] = useState("");

  const targetValue = (e) => {
    setValue(e.target.value);
  };

  const erase = () => {
    setValue("");
  };

  const submitValue = (e) => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    if (e.which === ENTER_KEY) {
      console.log(value);
      erase();
    } else if (e.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <section id="app" className="container">
      <h1 className="title">Lista de tarefas</h1>
      <div className="main">
        <input
          className="newTodo"
          placeholder="O que precisa ser feito!"
          type="text"
          value={value}
          onChange={targetValue}
          onKeyDown={submitValue}
        />
      </div>
    </section>
  );
}

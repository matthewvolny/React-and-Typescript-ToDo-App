import React, { useState } from "react";
import { TaskInput } from "./components/TaskInput";
import { ToDoItemsList } from "./components/ToDoItemsList";
import { ToDoItem } from "./models";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState<string>("");
  const [toDosList, setToDosList] = useState<ToDoItem[]>([]);

  const addToDo = (e: React.FormEvent) => {
    e.preventDefault();
    // const toDosListCopy = toDosList;
    // toDosListCopy.push({ id: Date.now(), item: toDo, isCompleted: false });
    // setToDosList(toDosListCopy);
    if (toDo) {
      setToDosList([
        ...toDosList,
        { id: Date.now(), text: toDo, isCompleted: false },
      ]);
      setToDo("");
    }
  };

  return (
    <div className="app">
      <div>What would you like to do today?</div>
      <div>
        <TaskInput toDo={toDo} setToDo={setToDo} addToDo={addToDo} />
        <ToDoItemsList toDosList={toDosList} />
      </div>
    </div>
  );
}

export default App;

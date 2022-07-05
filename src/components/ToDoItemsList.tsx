import React from "react";
import { ToDoItem } from "../models";
import { ToDo } from "./ToDo";

interface ToDoItemsListProps {
  toDosList: ToDoItem[];
  setToDosList: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

export const ToDoItemsList = ({
  toDosList,
  setToDosList,
}: ToDoItemsListProps) => {
  return (
    <div>
      {toDosList.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          toDosList={toDosList}
          setToDosList={setToDosList}
        />
      ))}
    </div>
  );
};

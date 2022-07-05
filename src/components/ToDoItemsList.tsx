import React from "react";
import { ToDoItem } from "../models";
import { ToDo } from "./ToDo";

interface ToDoItemsListProps {
  toDosList: ToDoItem[];
}

export const ToDoItemsList = ({ toDosList }: ToDoItemsListProps) => {
  return (
    <div>
      {toDosList.map((todo) => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

import React from "react";
import { ToDoItem } from "../models";

interface ToDoProps {
  todo: ToDoItem;
}

export const ToDo = ({ todo }: ToDoProps) => {
  return <div>{todo.text}</div>;
};

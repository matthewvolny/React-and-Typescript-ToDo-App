import React from "react";
import { ToDoItem } from "../models";
import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";

interface ToDoProps {
  todo: ToDoItem;
  toDosList: ToDoItem[];
  setToDosList: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

export const ToDo = ({ todo, toDosList, setToDosList }: ToDoProps) => {
  const deleteToDo = (id: number) => {
    const toDosListCopy = [...toDosList];
    setToDosList(toDosListCopy.filter((item) => item.id !== id));
  };

  const updateCompleted = (id: number) => {
    const toDosListCopy = [...toDosList];
    setToDosList(
      toDosListCopy.map((item) =>
        item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : { ...item }
      )
    );
  };

  return (
    <div>
      {todo.isCompleted ? (
        <div className="struck-through">{todo.text}</div>
      ) : (
        <div>{todo.text}</div>
      )}
      {/* <span>
        <AiOutlineCheck onClick={() => editToDo(todo.id)} />
      </span> */}
      <span>
        <AiOutlineCheck onClick={() => updateCompleted(todo.id)} />
      </span>
      <span>
        <AiFillDelete onClick={() => deleteToDo(todo.id)} />
      </span>
    </div>
  );
};

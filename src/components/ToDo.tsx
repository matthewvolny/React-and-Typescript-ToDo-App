import React, { useState, useRef, useEffect } from "react";
import { ToDoItem } from "../models";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import { isTemplateExpression } from "typescript";

interface ToDoProps {
  todo: ToDoItem;
  toDosList: ToDoItem[];
  setToDosList: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

export const ToDo = ({ todo, toDosList, setToDosList }: ToDoProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>(todo.text);

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

  const updateToDosArray = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    const toDosListCopy = [...toDosList];
    setToDosList(
      toDosListCopy.map((item) =>
        item.id === id ? { ...item, text: editedTask } : { ...item }
      )
    );
    setEditMode(false);
  };

  const taskInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    taskInputRef.current?.focus();
  }, [editMode]);

  return (
    <form onSubmit={(e) => updateToDosArray(e, todo.id)}>
      {editMode ? (
        <input
          ref={taskInputRef}
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : todo.isCompleted ? (
        <div className="struck-through">{todo.text}</div>
      ) : (
        <div>{todo.text}</div>
      )}
      <span>
        <AiFillEdit onClick={() => setEditMode(true)} />
      </span>
      <span>
        <AiOutlineCheck onClick={() => updateCompleted(todo.id)} />
      </span>
      <span>
        <AiFillDelete onClick={() => deleteToDo(todo.id)} />
      </span>
    </form>
  );
};

import React from "react";

interface TaskInputProps {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  addToDo: (e: React.FormEvent) => void;
}

export const TaskInput = ({ toDo, setToDo, addToDo }: TaskInputProps) => {
  return (
    <div>
      <form onSubmit={(e) => addToDo(e)}>
        <input
          type="text"
          value={toDo}
          placeholder="Enter a task"
          onChange={(e) => setToDo(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

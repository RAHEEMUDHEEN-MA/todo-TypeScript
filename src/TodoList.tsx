import React, { useState } from "react";

interface item {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [task, settask] = useState<string>("");

  const [todos, settodos] = useState<item[]>([]);

  const handleAdd = () => {
    const newTodo: item = { id: Date.now(), task: task, completed: false };
    settodos([...todos, newTodo]);
    settask(""); // Resetting the input field
};

  const handleToggle = (id: number) => {
    settodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  return (
    <div className="main-div">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.task}
          </li>
        ))}
      </ul>
      <input
      value={task}
       onKeyDown={(e)=>{e.key==="Enter"&&handleAdd()}}
        onChange={(e) => settask(e.currentTarget.value)}
        type="text"
        placeholder="Add Todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoList;

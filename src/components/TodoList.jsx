import React, { useReducer, useState } from "react";

const TodoList = () => {
  const [todos, dispatch] = useReducer(myReducer, []);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    dispatch({
      type: 'added',
      text: input,
    })
  };

  const handleRemoveTodo = (id) => {
    dispatch({
      type: 'removed',
      id: id,
    })
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: 'toggled',
      id: id,
    })
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <span onClick={() => handleToggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

function myReducer(todos, action) {
  switch(action.type) {
    case 'added': {
      return [...todos, {
        id: crypto.randomUUID(),
        text: action.text,
        completed: false,
      }];
    }
    case 'removed': {
      return todos.filter((todo) => todo.id !== action.id);
    }
    case 'toggled': {
      return todos.map((todo) => 
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      );
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
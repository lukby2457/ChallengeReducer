import React, { useContext } from 'react'
import { TodosContext, TodosDispatchContext } from '../context/TodosContext';

const TodosList = () => {
  const todos = useContext(TodosContext);
  const dispatch = useContext(TodosDispatchContext);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <span onClick={() => dispatch({
              type: 'toggled',
              id: todo.id,
            })}>{todo.text}</span>
            <button onClick={() => dispatch({
              type: 'removed',
              id: todo.id,
            })}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodosList
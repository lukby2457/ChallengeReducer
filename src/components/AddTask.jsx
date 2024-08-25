import React, { useContext, useState } from 'react'
import { TodosDispatchContext } from '../context/TodosContext';

const AddTask = () => {
  const [input, setInput] = useState("");
  const dispatch = useContext(TodosDispatchContext);

  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={() => {
        dispatch({
          type: 'added',
          text: input,
        });
        setInput('');
      }}>Add</button>
    </>
  )
}

export default AddTask
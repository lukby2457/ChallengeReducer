import { createContext, useReducer } from "react";

export const TodosContext = createContext(null);
export const TodosDispatchContext = createContext(null);

export function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(myReducer, []);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  )
}

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
import React from "react";
import AddTask from "./AddTask";
import PrintTodoList from "./PrintTodoList.jsx";
import { TodosProvider } from "../context/TodosContext.jsx";

const TodoList = () => {
  return (
    <TodosProvider>
      <h1>Todo List</h1>
      <AddTask />
      <PrintTodoList />
    </TodosProvider>
  );
};

export default TodoList;

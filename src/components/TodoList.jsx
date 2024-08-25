import React from "react";
import AddTask from "./AddTask";
import TodosList from "./TodosList";
import { TodosProvider } from "../context/TodosContext.jsx";

const TodoList = () => {
  return (
    <TodosProvider>
      <h1>Todo List</h1>
      <AddTask />
      <TodosList />
    </TodosProvider>
  );
};

export default TodoList;

import React from "react";

import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";

export const TodoListContainer = () => {
  return (
    <>
      <TodoFilter />
      <TodoList />
    </>
  );
};

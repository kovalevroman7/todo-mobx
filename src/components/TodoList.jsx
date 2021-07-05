import React from "react";

import { TodoItem } from "./TodoItem";

export const TodoList = ({ todoList }) =>
  todoList.map((todo) => <TodoItem key={todo.id} {...todo} />);

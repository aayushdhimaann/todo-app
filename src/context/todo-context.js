import { createContext } from "react";

export const TodoContext = createContext({
  items: [],
  newTodoHandler: () => {},
  deleteTodoHandler: () => {},
  loading: false,
  updateTodoHandler: () => {},
  existingTodo:{}
});

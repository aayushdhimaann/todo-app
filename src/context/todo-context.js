import { createContext } from "react";

export const TodoContext = createContext({
  items: [],
  newTodoHandler: () => {},
  deleteTodoHandler: () => {},
  //   fetchDataHandler: () => {},
});

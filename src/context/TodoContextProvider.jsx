import { useEffect, useState } from "react";
import { TodoContext } from "./todo-context";
function TodoContextProvider(props) {
  const [items, setItems] = useState([]);
  const [sent, setSent] = useState(false);
  const fetchDataHandler = async () => {
    const res = await fetch(
      "https://todo-ab60a-default-rtdb.firebaseio.com/todos.json"
    );
    const data = await res.json();

    const loadedTodos = [];
    for (let i in data) {
      loadedTodos.push({
        id: i,
        title: data[i].title,
        date: data[i].date,
      });
    }
    setItems(loadedTodos);
  };
  useEffect(() => {
    fetchDataHandler();
    // setSent(!sent);
  }, []);

  const newTodoHandler = async (newTodo) => {
    // console.log(newTodo);
    const res = await fetch(
      "https://todo-ab60a-default-rtdb.firebaseio.com/todos.json",
      {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    // console.log(data);
    if (data) {
      fetchDataHandler();
    }
  };

  const deleteTodoHandler = async (id) => {
    console.log(id);
    const res = await fetch(
      `https://todo-ab60a-default-rtdb.firebaseio.com/todos/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
      fetchDataHandler()
  };

  const ctxValue = {
    items,
    newTodoHandler,
    deleteTodoHandler,
  };
  return (
    <TodoContext.Provider value={ctxValue}>
      {props.children}
    </TodoContext.Provider>
  );
}
export default TodoContextProvider;

import { useContext } from "react";
import Todos from "./components/Todos";
import { TodoContext } from "./context/todo-context";
import TodoForm from "./components/TodoForm";
import { HashLoader } from "react-spinners";
import UpdateTodo from "./components/UpdateTodo";
function App() {
  const ctx = useContext(TodoContext);
  return (
    <div className="parent">
      <TodoForm />
      {ctx.isVisible && <UpdateTodo />}

      {ctx.loading ? (
        <div className="loader">
          <HashLoader color="#000000" size={200} />
        </div>
      ) : (
        <>
          {ctx.items.map((item) => (
            <Todos
              key={item.id}
              title={item.title}
              date={item.date}
              id={item.id}
            />
          ))}
        </>
      )}
    </div>
  );
}
export default App;

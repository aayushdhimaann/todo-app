import { useContext } from "react";
import Todos from "./components/Todos";
import { TodoContext } from "./context/todo-context";
import TodoForm from "./components/TodoForm";
function App() {
  const ctx = useContext(TodoContext);
  return (
    <>
      <TodoForm />
      {ctx.items.map((item) => (
        <Todos key={item.id} title={item.title} date={item.date} id={item.id} />
      ))}
    </>
  );
}
export default App;

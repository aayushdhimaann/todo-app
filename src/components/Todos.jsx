import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { TodoContext } from "../context/todo-context";

const Todos = (props) => {
  const ctx = useContext(TodoContext);

  return (
    <div className="todo">
      <div className="left">
        <h2
          onClick={() => {
            ctx.updateTodoHandler(props.id);
          }}
        >
          {props.title} ({props.date})
        </h2>
      </div>
      <div className="right">
        <button
          onClick={() => {
            ctx.deleteTodoHandler(props.id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} /> Delete
        </button>
      </div>
    </div>
  );
};
export default Todos;

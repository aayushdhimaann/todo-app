import { useContext, useRef } from "react";
import { TodoContext } from "../context/todo-context";

const TodoForm = () => {
  const ctx = useContext(TodoContext);
  const titleRef = useRef("");
  const dateRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: titleRef.current.value,
      date: dateRef.current.value,
    };
    // console.log(newTodo);
    ctx.newTodoHandler(newTodo);
    dateRef.current.value = "";
    titleRef.current.value = "";
    // console.log(new Date(dateRef.current.value));
    // console.log(dateRef.current.value);
  };
  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <label htmlFor="">Enter Title</label>
        <input type="text" placeholder="Enter Title" ref={titleRef} />

        <label htmlFor="">Enter Date</label>
        <input type="date" min="2022-01-01" ref={dateRef} />

        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
export default TodoForm;

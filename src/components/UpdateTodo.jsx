import { useContext, useRef } from "react";
import { TodoContext } from "../context/todo-context";

const UpdateTodo = () => {
  const titleRef = useRef("");
  const dateRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    const updatedTodo = {
      title: titleRef.current.value,
      date: dateRef.current.value,
    };
    console.log(updatedTodo);
  };
  const ctx = useContext(TodoContext);

  return (
    <>
      <div className="update">
        <form onSubmit={submitHandler} className="form">
          <label htmlFor="title">Enter New Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title"
            value={ctx.existingTodo.title}
            ref={titleRef}
          />
          <label htmlFor="date">Enter New Date</label>
          <input
            type="date"
            id="date"
            min="2022-01-01"
            ref={dateRef}
            value={ctx.existingTodo.date}
          />
          <input type="submit" value="Update" />
        </form>
      </div>
    </>
  );
};
export default UpdateTodo;

import { useContext, useState } from "react";
import { TodoContext } from "../context/todo-context";

const UpdateTodo = () => {
  const ctx = useContext(TodoContext);
  const title = ctx.existingTodo.title;
  // console.log(title);
  const date = ctx.existingTodo.date;
  const [newTitle, setNewTitle] = useState(title);
  const [newDate, setNewDate] = useState(date);
  const submitHandler = (e) => {
    e.preventDefault();
    const updatedTodo = {
      id: ctx.existingTodo.id,
      title: newTitle,
      date: newDate,
    };
    // console.log(updatedTodo);
    ctx.updateHandler(updatedTodo);
  };

  return (
    <div className="backdrop">
      <div className="update">
        <form onSubmit={submitHandler} className="form">
          <label htmlFor="title">Enter New Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          />
          <label htmlFor="date">Enter New Date</label>
          <input
            type="date"
            id="date"
            min="2022-01-01"
            value={newDate}
            onChange={(e) => {
              setNewDate(e.target.value);
            }}
          />
          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};
export default UpdateTodo;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value)return;
    dispatch(addTodo({ title: value }));
    setValue("");
  };
  return (
    <form
      className="flex flex-col justify-center mt-3 mb-4 px-4"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="mb-1">
        Name
      </label>
      <input
        autoComplete="off"
        id="name"
        type="text"
        className="border rounded-md px-4 py-2 border-gray-400 focus:outline-none focus:border-blue-500 text-gray-700 "
        placeholder="Add todo ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-blue-600 rounded text-white cursor-pointer mt-4 "
      >
        submit
      </button>
    </form>
  );
}

export default AddTodoForm;

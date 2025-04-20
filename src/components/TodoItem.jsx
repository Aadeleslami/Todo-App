import React from "react";
import { useDispatch } from "react-redux";
import { deleteAsyncTodo,  toggleAsyncTodo,  toggleTodo } from "../features/todo/todoSlice";

function TodoItem({ id, completed, title  }) {
  
  const dispatch = useDispatch();
  return (
    <li
      className={`border-b border-gray-300 p-4 mb-4 ${
        completed && "bg-green-100"
      }`}
    >
      <div className="flex justify-between items-center mt-4">
        <span className="flex items-center justify-center">
          <input
            onChange={() => dispatch(toggleAsyncTodo({ id,completed }))}
            type="checkbox"
            className="mr-2"
            checked={completed}
          />
          <span>{title}</span>
        </span>
        <button
        type="button"
          onClick={() => dispatch(deleteAsyncTodo({ id }))}
          className="bg-red-600 rounded-md text-white cursor-pointer p-2"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;

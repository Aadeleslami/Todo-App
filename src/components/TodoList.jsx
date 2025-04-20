import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "../features/todo/todoSlice";

function TodoList() {
 

  const { todos ,loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch()
  console.log(todos,loading,error);

  useEffect(()=>{
    dispatch(getAsyncTodos())

  },[])
  return (
    <div>
      <h2>TodoList</h2>
     {
      loading ? <p>Loading ...</p> : error ? <p>not found data</p> :
      <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
     }
    </div>
  );
}

export default TodoList;

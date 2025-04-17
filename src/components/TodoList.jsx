import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  //  const todos= useSelector((state)=> state.todos)
  //  console.log(todos);

  const { todos } = useSelector((state) => state.todos);
  return (
    <div>
      <h2>TodoList</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} props={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

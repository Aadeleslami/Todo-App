import React from 'react'
import TodoItem from './TodoItem'
const todos =[
    {id:1,title:"todo 1", completed:false},
    {id:2,title:"todo 2", completed:false},
]
function TodoList() {
  return (
    <div>
        <h2>TodoList</h2>
        <ul>
            {todos.map((todos)=>(
                <TodoItem key={todos.id} todos={todos} />
            ))}
        </ul>
    </div>
  )
}

export default TodoList
import { useSelector } from "react-redux"
import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"

function App() {
 const todos =  useSelector((state)=> state.todos)
 console.log(todos);
 
  return (
    <div className="container pt-3 mx-auto md:max-w-2xl">
      <h1 className="text-center font-medium text-2xl">TodoApp with RTK</h1>
<AddTodoForm />
<TodoList/>
    </div>
  )
}

export default App
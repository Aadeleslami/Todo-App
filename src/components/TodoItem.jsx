import React from 'react'

function TodoItem({todos}) {
  return (
    <li className={`border-b border-gray-300 p-4 mb-4 ${todos.completed && 'bg-green-100' }`}>
        <div className='flex justify-between items-center mt-4'>
            <span className='flex items-center justify-center'>
                <input type="checkbox" className='mr-2'checked="checked"  />
                <span>{todos.title}</span>
               
            </span>
            <button className='bg-red-600 rounded-md text-white cursor-p p-2'>Delete</button>
        </div>
    </li>
  )
}

export default TodoItem
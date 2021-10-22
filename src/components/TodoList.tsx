import React from 'react'
import TodoItem from './TodoItem'
import { TodoType } from 'interfaces/Todo'
export default function TodoList({handleDispatch,todos} :{handleDispatch : Function,todos:Array<TodoType>}) {
    return (
        <div className="task-list">
           {todos.map(item => (
               <h1>{item.task}</h1>
           ))}
        </div>
    )
}

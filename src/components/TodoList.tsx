import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
    return (
        <div className="task-list">
            <TodoItem /> 
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoToolbar from './TodoToolbar'

export default function Todo() : JSX.Element {
    return (
        <div className="app">
            <div className="task-header">
                <h1 className="task-header-title">Bugünün tarihi</h1>
                <TodoToolbar /> 
                <TodoInput />
            </div>
            <TodoList />
        </div>
    )
}

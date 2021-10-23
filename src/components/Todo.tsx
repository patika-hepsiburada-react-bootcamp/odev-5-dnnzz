import React from 'react'
import { dateFormatter } from 'utils/utils'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoToolbar from './TodoToolbar'
import { todoReducer } from 'reducers/reducer'
import { ActionTypes, TodoType } from 'interfaces/Todo'

export default function Todo() {

    const initialState = JSON.parse(localStorage.getItem("todos")!);
    const [state, dispatch] = React.useReducer(todoReducer,{todos : initialState});
    const [filter,setFilter] = React.useState<string>("all");

    const handleDispatch = (type : ActionTypes, payload: TodoType) : void => {
       return dispatch({type:type,payload:payload});
    }
    return (
        <div className="app">
            <div className="task-header">
                <h1 className="task-header-title">{dateFormatter()}</h1>
                <TodoToolbar filter={filter} numberOfTasks={state.todos.length} handleFilter = {setFilter}/> 
                <TodoInput handleDispatch={handleDispatch} />
            </div>
            <TodoList filter={filter} todos = {state.todos} handleDispatch={handleDispatch}/>
        </div>
    )
}

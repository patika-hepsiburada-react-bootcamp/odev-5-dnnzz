import React from 'react'
import { dateFormatter } from 'utils/utils'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoToolbar from './TodoToolbar'
import { todoReducer } from 'reducers/reducer'
import { Action, ActionTypes, TodoType } from 'interfaces/Todo'

export default function Todo() {
    const [initialState,setInitialState] = React.useState<Array<TodoType>>(JSON.parse(localStorage.getItem("todos")!));
    const [state, dispatch] = React.useReducer(todoReducer,initialState);

    const handleDispatch = (type : ActionTypes, payload: TodoType) : void => {
        dispatch({type:type,payload:payload});
    }
    return (
        <div className="app">
            <div className="task-header">
                <h1 className="task-header-title">{dateFormatter()}</h1>
                <TodoToolbar /> 
                <TodoInput />
            </div>
            <TodoList todos = {state} handleDispatch={handleDispatch}/>
        </div>
    )
}

import { ActionTypes } from 'interfaces/Todo';
import React from 'react'

interface IProps {
    task : string;
    isFinished:boolean;
    handleDispatch: Function;
}

export default function TodoItem({task,isFinished,handleDispatch} : IProps) {
    return (
        <div className={isFinished === true ? "task-item is-completed" : "task-item"}>
            <input className="task-status" type="checkbox" checked={isFinished} onChange={(e) => handleDispatch(ActionTypes.PATCH,{task:task,isFinished:isFinished})}/>
            <label className="task-name">{task}</label>
            <button className="task-delete" onClick={(e) => handleDispatch(ActionTypes.DELETE,{task:task})}></button>
        </div>
    )
}

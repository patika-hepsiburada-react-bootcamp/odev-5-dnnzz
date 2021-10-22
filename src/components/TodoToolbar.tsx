import React from 'react'


export default function TodoToolbar(){
    return (
        <div className="task-tools">
            <div className="task-count">5 tasks</div>
            <div className="task-filter">
                <button className="task-filter is-active">All</button>
                <button className="task-filter">Active</button>
                <button className="task-filter">Completed</button>
            </div>
        </div>
    )
}

import React from 'react'

export default function TodoInput() {
    return (
        <div>
            <form className="task-form">
                <input className="task-input"  placeholder="What needs to be done?" autoFocus={true} />
                <button className="task-button">Add Task</button>
            </form>
        </div>
    )
}

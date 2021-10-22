import React from 'react'

export default function TodoItem(): JSX.Element {
    return (
        <div className="task-item">
            <input className="task-status" type="checkbox" checked={true} />
            <label className="task-name">Morning walk</label>
            <button className="task-delete"></button>
        </div>
    )
}

import { ActionTypes } from 'interfaces/Todo';
import React, { ChangeEvent, FormEvent } from 'react'

export default function TodoInput({handleDispatch} :{handleDispatch : Function}) {
    const [inputValue,setInputValue] = React.useState<string>("");
    const handleChange = (e : ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        handleDispatch(ActionTypes.ADD,{task:inputValue,isFinished:false});
        setInputValue("");
    }
    return (
        <div>
            <form className="task-form" onSubmit={(e) => handleSubmit(e)}>
                <input className="task-input"  onChange={(e) => handleChange(e)} value={inputValue} placeholder="What needs to be done?" autoFocus={true} />
                <button className="task-button">Add Task</button>
            </form>
        </div>
    )
}

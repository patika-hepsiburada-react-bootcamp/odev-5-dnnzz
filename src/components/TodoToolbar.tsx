


export default function TodoToolbar({handleFilter,numberOfTasks,filter} : {handleFilter:Function,numberOfTasks:number,filter:string}){
    
    const handleClick = (value:string) => handleFilter(value);
    return (
        <div className="task-tools">
            <div className="task-count">{numberOfTasks} tasks</div>
            <div className="task-filter">
                <button onClick={(e) => handleClick("all")} className={filter === "all" ? "task-filter is-active" : "task-filter"}>All</button>
                <button onClick={(e) => handleClick("active")} className={filter === "active" ? "task-filter is-active" : "task-filter"}>Active</button>
                <button onClick={(e) => handleClick("completed")} className={filter === "completed" ? "task-filter is-active" : "task-filter"}>Completed</button>
            </div>
        </div>
    )
}

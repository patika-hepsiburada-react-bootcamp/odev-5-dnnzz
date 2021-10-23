import TodoItem from './TodoItem'
import { ActionTypes, TodoType } from 'interfaces/Todo'

interface IProps {
    handleDispatch : Function;
    todos:Array<TodoType>;
    filter:string;
}
export default function TodoList({handleDispatch,todos,filter} :IProps) {

    const renderTodoList = (filterParam : string) =>(todos.filter(item => filterParam === "active" ? item.isFinished === false : item.isFinished === true).map((item,key) => (
        <div key={key}>
            <TodoItem  task={item.task} isFinished={item.isFinished} handleDispatch={handleDispatch} />
        </div>
    ))
    );
    const handleClick = () => handleDispatch(ActionTypes.DELETE_ALL,1);
    
    return (
        <div className="task-list">
          {filter !== "all" ? renderTodoList(filter) : todos.map((item,key)=>(
               <div key={key}>
               <TodoItem  task={item.task} isFinished={item.isFinished} handleDispatch={handleDispatch} />
           </div>
          ))}
          <button onClick = {(e) => handleClick()} className="clear-btn">Clear all</button>
        </div>
    )
}

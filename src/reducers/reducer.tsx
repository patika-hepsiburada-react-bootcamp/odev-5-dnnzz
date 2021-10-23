import {TodoType,Action, ActionTypes} from "../interfaces/Todo";
import {remove} from '../utils/utils';

export function todoReducer (state:{todos:Array<TodoType>},action:Action):any{
    const {type , payload} = action;
    switch(type){
        case ActionTypes.ADD:
            return {
                ...state,
                todos : [...state.todos,payload]
            }
        case ActionTypes.DELETE:
            return {
                ...state,
                todos : remove(state.todos,"task",payload.task)
            }
        case ActionTypes.DELETE_ALL:
            return{
                ...state,
                todos : state.todos.filter((task) => task.isFinished === false)
            }
        case ActionTypes.PATCH:
            // Find and replace status 
            const newTasks = state.todos.reduce((ds, d) => {
                let newD = d;
                if (d.task === payload.task) {
                  newD = Object.assign({}, d, { isFinished: !payload.isFinished });
                }
                return ds.concat(newD);
              }, [] as Array<TodoType>);
            return {
                ...state,
                todos: newTasks
            }
        default:
            return state;

    }
}
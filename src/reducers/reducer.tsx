import {TodoType,Action, ActionTypes} from "../interfaces/Todo";
import {remove} from '../utils/utils';

export function todoReducer (state:Array<TodoType>,action:Action):any{
    const {type , payload} = action;
    switch(type){
        case ActionTypes.ADD:
            return {
                state : [...state,payload]
            }
        case ActionTypes.DELETE:
            return {
                state : remove(state,"task",payload.task)
            }
        case ActionTypes.DELETE_ALL:
            return{
                state : state.filter((task) => task.isFinished === true)
            }
        case ActionTypes.PATCH:
            let tempTask = state.find(v => v.task === payload.task);
            if(tempTask?.isFinished === true){
                tempTask.isFinished = false;
            }
            if(tempTask?.isFinished === false){
                tempTask.isFinished = true;
            }
            return {
                state: state
            }

    }
}
export interface TodoType{
    task:string;
    isFinished:boolean;
}
 export enum ActionTypes{
    ADD = "ADD",
    DELETE = "DELETE",
    DELETE_ALL = "DELETE_ALL",
    PATCH = "PATCH",
}

export interface Action {
    type:ActionTypes;
    payload:TodoType;
}

export enum FilterTypes {
    ALL = "ALL",
    COMPLETED = "COMPLETED",
    ACTIVE = "ACTIVE",
}
import {TodolistType} from "../App";
const removeTodolist = 'REMOVE-TODOLIST'

type ActionType={
    type:string,
    [key:string]:any
}
export const todolistsReducer = (state:Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case removeTodolist:

              default:
            throw new Error("I don't understand this type")
    }
}

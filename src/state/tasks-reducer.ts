import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";
const removeTodolist = 'REMOVE-TODOLIST'


export type RemoveTodolistActionType={
    type:'REMOVE-TODOLIST',
    id:string
}
export type AddTodolistActionType={
    type:'ADD-TODOLIST',
    title:string
}
export type CangeTodolistTitleActionType={
    type:'CHANGE-TODOLIST-TITLE'
    title:string
    id:string
}
export type ChangeTodolistFilter={
    type:'CHANGE-TODOLIST-FILTER'
    filter:FilterValuesType
    id:string
}
type ActionType = RemoveTodolistActionType|AddTodolistActionType|CangeTodolistTitleActionType|ChangeTodolistFilter
export const todolistsReducer = (state: Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case removeTodolist:
            return state.filter(tl => tl.id != action.id)
        case 'ADD-TODOLIST': {
            return [...state, {
                id: v1(),
                title: action.title,
                filter: 'all'
            }]
        }
        case 'CHANGE-TODOLIST-TITLE':{
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                todolist.title = action.title
            }
            return[...state]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            let todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.filter = action.filter;
            }
            return [...state]
        }
        default:
            throw new Error("I don't understand this type")
    }
}
export const RemoveTodolistAC=(todolistId:string):RemoveTodolistActionType=>{
    return {type:"REMOVE-TODOLIST",id:todolistId}
}
export const AddTodolistAC=(title:string):AddTodolistActionType=>{
    return{type:'ADD-TODOLIST',title:title}
}
export const ChangeTodolistTitleAC=(title:string,id:string):CangeTodolistTitleActionType=>{
    return {type:'CHANGE-TODOLIST-TITLE',title:title,id:id}
}
export const ChangeTodolistFilterAC=(filter:FilterValuesType,id:string):ChangeTodolistFilter=>{
    return {type:'CHANGE-TODOLIST-FILTER',filter:filter,id:id}
}
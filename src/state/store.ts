import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";


export const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
})

export const store = createStore(rootReducer);

// type AppRootState = {
//     todlists:Array<TodolistType>
//     tasks:TasksStateType
// }

export type AppRootState = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;




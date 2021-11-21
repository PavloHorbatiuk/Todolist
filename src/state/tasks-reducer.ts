import {TasksStateType, TasksType, TodolistType} from "../App";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";


export type RemoveTasksActionType = {
    type: "REMOVE-TASKS",
    todolistId: string,
    tasksId: string
}
export type AddTasksType = {
    type: 'ADD-TASK'
    title: string,
    todolistId: string
}
export type changeTaskStatusType = {
    type: "CHANGE-STATUS-TASKS"
    isDone: boolean,
    todolistId: string,
    taskId: string
}
export type changeTasksTitleType = {
    type: "CHANGE-TASK-TITLE"
    title: string,
    todolistId: string,
    taskId: string
}

type ActionType =
    RemoveTasksActionType
    | AddTasksType
    | changeTaskStatusType
    | changeTasksTitleType
    | AddTodolistActionType
|RemoveTodolistActionType
export const tasksReducer = (state: TasksStateType, action: ActionType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASKS": {
            const stateCopy = {...state};
            const tasks = state[action.todolistId];
            const filteredTasks = tasks.filter(t => t.id !== action.tasksId)
            stateCopy[action.todolistId] = filteredTasks;
            return stateCopy;
        }
        case 'ADD-TASK': {
            const stateCopy = {...state};
            const tasks = stateCopy[action.todolistId]
            const newTask = {id: v1(), title: action.title, isDone: false};
            const newTasks = [newTask, ...tasks];
            stateCopy[action.todolistId] = newTasks;
            return stateCopy
        }
        case "CHANGE-STATUS-TASKS": {
            const stateCopy = {...state};
            let tasks = stateCopy[action.todolistId]
            let task = tasks.find(t => t.id === action.taskId);
            if (task) {
                task.isDone = action.isDone;
            }
            return stateCopy
        }
        case "CHANGE-TASK-TITLE": {
            const stateCopy = {...state};
            let tasks = stateCopy[action.todolistId]
            let task = tasks.find(t => t.id === action.taskId);
            if (task) {
                task.title = action.title;
            }
            return stateCopy
        }
        case 'ADD-TODOLIST': {
            const stateCopy = {...state};
            stateCopy[action.todolistId] = [];
            return stateCopy
        }
        case 'REMOVE-TODOLIST':{
            const stateCopy={...state}
            delete stateCopy[action.id]
            return stateCopy
            }
        default:
            throw new Error("I don't understand this type")
    }
};

export const removeTaskAC = (tasksId: string, todolistId: string): RemoveTasksActionType => {
    return {type: "REMOVE-TASKS", tasksId, todolistId,}
};
export const addTaskAC = (title: string, todolistId: string): AddTasksType => {
    return {type: 'ADD-TASK', title, todolistId}
};
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): changeTaskStatusType => {
    return {type: "CHANGE-STATUS-TASKS", isDone, todolistId, taskId}
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): changeTasksTitleType => {
    return {type: "CHANGE-TASK-TITLE", taskId, title, todolistId}
}
export const addTodolistAC = (title: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title:title,todolistId:v1()}
}

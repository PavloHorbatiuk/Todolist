import React, {ChangeEvent, useCallback} from 'react';
import './App.css';
import {FilterValuesType, TasksType} from "./App";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import AddItemForm from "./AddItemForm";
import {EdditAbleSpan} from "./EdditAbleSpan";

type TodolistType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void
    filter: 'all' | "active" | "completed"
    id: string
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
}
export type TaskStateType = {
    [key: string]: Array<TasksType>
}

export const Todolist = React.memo(function (props: TodolistType) {
    console.log("Todolist")
    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id);
    }, [props.addTask, props.id]);
    const removeTodolist = useCallback(() => {
        props.removeTodolist(props.id)
    }, [props.removeTodolist, props.id]);
    const changeTodolistTitle = useCallback((newTitle: string) => {
        props.changeTodolistTitle(props.id, newTitle);
    }, [props.changeTodolistTitle, props.id])
    const onAllClickHandler = useCallback(() => {
        props.changeFilter("all", props.id)
    }, [props.changeFilter, props.id])
    const onActiveHandler = useCallback(() => {
        props.changeFilter("active", props.id)
    }, [props.changeFilter, props.id])
    const onCompletedClickHandler = useCallback(() => {
        props.changeFilter("completed", props.id)
    }, [props.changeFilter, props.id]);

    let tasksForTodoList = props.tasks;
    if (props.filter === "active") {
        tasksForTodoList = props.tasks.filter(t => t.isDone === false);
    }
    if (props.filter === "completed") {
        tasksForTodoList = props.tasks.filter(t => t.isDone === true);
    }

    return (<div>
            <h3><EdditAbleSpan title={props.title} onChange={changeTodolistTitle}/>
                <IconButton onClick={removeTodolist}><Delete/></IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <div>{
                tasksForTodoList.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id);
                    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id)
                    }
                    const onChangeTitleHandler = (newValue: string) => {
                        props.changeTaskTitle(t.id, newValue, props.id);
                    }
                    return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                        <Checkbox color={'primary'} onChange={onChangeStatusHandler} checked={t.isDone}/>
                        <EdditAbleSpan title={t.title} onChange={onChangeTitleHandler}/>
                        <IconButton aria-label="delete"
                                    onClick={onClickHandler}>
                            <Delete fontSize="medium"/>
                        </IconButton>

                    </div>
                })
            }
            </div>
            <div>
                <Button variant={props.filter === 'all' ? "outlined" : 'text'}
                        onClick={onAllClickHandler}
                        color={"default"}>All
                </Button>
                <Button variant={props.filter === 'active' ? "outlined" : "text"}
                        onClick={onActiveHandler}
                        color={"primary"}>Active
                </Button>
                <Button variant={props.filter === "completed" ? "outlined" : "text"}
                        onClick={onCompletedClickHandler}
                        color={"secondary"}>Completed
                </Button>
            </div>
        </div>
    )
})


export default Todolist;

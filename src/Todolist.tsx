import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './App.css';
import {TasksType} from "./App";
import {Button, IconButton, TextField} from "@material-ui/core";
import {Delete} from "@material-ui/icons";


type TodolistType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: 'all' | "active" | "completed", todolistId: string) => void
    addTask: (title: string,  todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todlistId: string) => void
    filter: 'all' | "active" | "completed"
    id: string
    removeTodlist:(todolistId:string)=>void
}
type TaskStateType={
    [key:string]:Array<TasksType>
}

function Todolist(props: TodolistType) {
    let [title, setTitle] = useState("");
    let [error, setError] = useState<string | null>(null)
    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim(),props.id);
            setTitle('');
        } else {
            setError('Title is required');
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    };
    const onKeyPressPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask()
        }
    }
    const onAllClickHandler = () => {
        props.changeFilter("all", props.id)
    }

    const onActiveHandler = () => {
        props.changeFilter("active", props.id)
    }
    const onComplitedClickHandler = () => {
        props.changeFilter("completed", props.id)
    };
    const onClickremoveTodlist =()=>{
        props.removeTodlist(props.id)
    }
    return (
        <div className="App">
            <div>
                <h3>{props.title}
                <button onClick={onClickremoveTodlist}>x</button></h3>
                <div>
                    <div>
                        <TextField
                            label="Введите задание"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            value={title}
                            onChange={onChangeHandler}
                            onKeyPress={onKeyPressPressHandler}

                        />
                        <Button variant="contained"
                                onClick={addTask}>+</Button>
                        {error && <div className='error-message'>{error}</div>}
                    </div>
                    <ul>{
                        props.tasks.map(t => {
                            const onClickHandler = () => props.removeTask(t.id,props.id);
                            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                let newIsDoneValue = e.currentTarget.checked;
                                props.changeTaskStatus(t.id, newIsDoneValue,props.id)
                            }
                            return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                                <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                                <span>{t.title}</span>
                                <IconButton aria-label="delete"
                                            onClick={onClickHandler}>
                                    <Delete fontSize="medium"/>
                                </IconButton>

                            </li>
                        })
                    }
                    </ul>
                    <div>
                        <button className={props.filter === 'all' ? "active-filter" : ''}
                                onClick={onAllClickHandler}>All
                        </button>
                        <button className={props.filter === 'active' ? "active-filter" : ""}
                                onClick={onActiveHandler}>Active
                        </button>
                        <button className={props.filter === "completed" ? "active-filter" : ""}
                                onClick={onComplitedClickHandler}>Completed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Todolist;

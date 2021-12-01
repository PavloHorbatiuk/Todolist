import React, {useCallback} from 'react';
import './App.css';
import AddItemForm from "./AddItemForm";
import {AppBar, IconButton, Box, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';
import {Container, Grid, Paper} from "@mui/material";
import {
    AddTodolistAC,
    ChangeTodolistFilterAC,
    ChangeTodolistTitleAC,
    RemoveTodolistAC,
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";
import {Todolist} from "./Todolist";


export type FilterValuesType = "all" | "active" | "completed"
export type TasksType = {
    title: string
    id: string,
    isDone: boolean,

}
export type TodolistType = {
    id: string
    title: string
    filter: 'all' | "active" | "completed"
}
export type TasksStateType = {
    [key: string]: Array<TasksType>
}


function AppWithRedux() {
    console.log("APP")
    const dispatch = useDispatch()
    const todolists = useSelector<AppRootState, Array<TodolistType>>(state => state.todolists)
    const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks)

    function removeTask(id: string, todolistId: string) {
        const action = removeTaskAC(id, todolistId);
        dispatch(action);
    }

    const addTask = useCallback((title: string, todolistId: string) => {
        const action = addTaskAC(title, todolistId);
        dispatch(action)
    }, [dispatch])
    const changeStatus = useCallback((id: string, isDone: boolean, todolistId: string) => {
        const action = changeTaskStatusAC(id, isDone, todolistId);
        dispatch(action)
    }, [dispatch])
    const changeTaskTitle = useCallback((id: string, newTitle: string, todolistId: string) => {
        const action = changeTaskTitleAC(id, newTitle, todolistId);
        dispatch(action)
    }, [dispatch])
    const changeFilter = useCallback((value: FilterValuesType, todolistId: string) => {
        dispatch(ChangeTodolistFilterAC(value, todolistId))
    }, [dispatch])
    const removeTodolist = useCallback((id: string) => {
        dispatch(RemoveTodolistAC(id))
        dispatch(RemoveTodolistAC(id));
    }, [dispatch]);
    const addTodolist = useCallback((title: string) => {
        const action = AddTodolistAC(title);
        dispatch(action)
    }, [dispatch])
    const changeTodolistTitle = useCallback((id: string, newTitle: string) => {
        dispatch(ChangeTodolistTitleAC(id, newTitle))
    }, [dispatch])
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container fixed>
                <Grid container style={{padding: "20px"}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map((tl) => {
                            let allTodolistTasks = tasks[tl.id];
                            let tasksForTodoList = allTodolistTasks

                            return <Grid item>
                                <Paper style={{padding: "10px"}}>
                                    <Todolist
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodoList}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodolistTitle={changeTodolistTitle}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithRedux;

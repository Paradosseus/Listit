import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../axios-client";

export const TaskContext = createContext({
    task: [],
    taskLength: 0,
    setTask: () => { },
    getTasks: () => { }
});

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [taskLength, setTaskLength] = useState(0);


    const getTasks = () => {
        console.log("getting tasks....")
        axiosClient.get('/tasks')
            .then(({ data }) => {
                setTasks(data)
                setTaskLength(data.length)
                console.log("done")
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            await getTasks();
        }

        fetchData();

    }, [])

    return (
        <TaskContext.Provider value={{
            tasks,
            taskLength,
            setTasks,
            getTasks
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => useContext(TaskContext)
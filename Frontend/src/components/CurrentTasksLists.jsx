import { useState } from "react";
import axiosClient from "../axios-client";
import NewTask from "./NewTask";
import { useTaskContext } from "../context/ContextProvider";
import { useModalContext } from "../context/ModalProvider";

import { MdEdit } from "react-icons/md";

export const CurrentTasksLists = () => {
    const { tasks, getTasks } = useTaskContext();
    const { modal, toggleModal } = useModalContext();
    const [errors, setErrors] = useState(null);



    const deleteTask = (task) => {
        axiosClient.delete(`tasks/${task.id}`)
            .then(() => {
                getTasks();
            })
    }

    const setTaskToDone = (task) => {
        console.log(task)
        const updatedTask = { ...task, status: "completed" }
        axiosClient.put(`tasks/${task.id}`, updatedTask)
            .then(() => {
                getTasks();
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }

            })
    }

    return (
        <>
            <div className="h-[500px] mt-4 relative">
                {tasks ? (
                    <ul className="overflow-y-auto scrollbar-hide h-full">
                        {tasks.map(task => (
                            (task.status === "pending" && (
                                <li key={task.id} className="my-6 bg-[#1D1D1D] h-[110px] px-4 flex items-center justify-between rounded-lg">
                                    <div>
                                        <div>
                                            <span className="text-2xl text-[#FFFFFF] mr-2">{task.task}</span><button><MdEdit className="text-[#646464] text-lg" /></button>
                                        </div>
                                        <span className="italic text-lg uppercase" style={{ color: task.priority === "urgent" ? "#9C2B2B" : "#2B9C51" }}>{task.priority}</span>
                                    </div>
                                    <div className="flex items-center justify-around gap-5">

                                        <button className="w-32 h-14 bg-[#FFFFFF] hover:bg-[#BBBBBB] rounded-sm" onClick={e => setTaskToDone(task)}>DONE</button>
                                        <button className="w-32 h-14 bg-[#FFFFFF] hover:bg-[#BBBBBB] rounded-sm" onClick={e => deleteTask(task)}>DELETE</button>
                                    </div>

                                </li>
                            ))
                        ))
                        }
                    </ul>
                ) : (
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-[#969696] mb-5">There are no pending tasks at the moment</p>
                            <button className="bg-[#D9D9D9] hover:bg-[#bcbcbc] uppercase h-14 w-52 rounded-md font-bold" onClick={toggleModal}>Add task</button>
                            <br />
                        </div>
                    </div>
                )}

                {modal &&
                    (
                        <div className="absolute top-32 left-96">
                            <NewTask />
                        </div>
                    )
                }


            </div >
        </>

    )
}
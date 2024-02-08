import { useTaskContext } from "../context/ContextProvider";
import { useModalContext } from "../context/ModalProvider";
import { MdDeleteOutline } from "react-icons/md";
import NewTask from "./NewTask";


export const FinishedTasksLists = () => {
    const { tasks, getTasks } = useTaskContext();
    const { modal, toggleModal } = useModalContext();

    return (
        <>
            <div className="h-[500px] mt-4 relative">
                {tasks ? (
                    <ul className="overflow-y-auto scrollbar-hide h-full">
                        {tasks.map(task => (
                            (task.status === "completed" && (
                                <li key={task.id} className="my-6 bg-[#1D1D1D] h-[110px] px-4 flex items-center justify-between rounded-lg">
                                    <span className="text-2xl text-[#FFFFFF] mr-2">{task.task}</span>
                                    <div className="flex items-center justify-around gap-5">
                                        <button><MdDeleteOutline className="text-white text-[50px]" /></button>
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
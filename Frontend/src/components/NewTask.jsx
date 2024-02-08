import { useState } from "react";
import axiosClient from "../axios-client";
import { useModalContext } from "../context/ModalProvider";



const NewTask = () => {
    const { toggleModal } = useModalContext();

    const [task, setTask] = useState({
        id: null,
        task: '',
        status: 'pending',
        priority: ''
    })

    const onSubmit = (ev) => {
        ev.preventDefault();
        axiosClient.post(`tasks/`, task)
            .then(() => {
                toggleModal();
            })
    }

    return (
        <>
            <div className="rounded-md w-[400px] h-[260px] bg-[#D9D9D9] p-4 relative border-2 border-white">
                <div className="flex justify-between">
                    <h3 className="font-bold text-lg">New Task</h3>
                    <button className="font-bold" onClick={toggleModal}>X</button>
                </div>
                <span>Task Name</span>
                <form action="" onSubmit={onSubmit} >
                    <input type="text" className="h-8 w-full px-2 mb-2" onChange={ev => setTask({ ...task, task: ev.target.value })} />
                    <label htmlFor="priority">Priority</label>
                    <select name="priority" id="priority" className="h-8 w-full mb-5" onChange={ev => setTask({ ...task, priority: ev.target.value })}>
                        <option value="urgent">None</option>
                        <option value="urgent">Urgent</option>
                        <option value="not urgent">Not Urgent</option>
                    </select>
                    <button className="bg-white h-12 w-48 block m-auto rounded-md hover:bg-[#cecece] font-bold">Add Task</button>
                </form>
            </div >
        </>

    )
}

export default NewTask;


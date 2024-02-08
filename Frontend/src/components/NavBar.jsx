import { Link, NavLink } from "react-router-dom";
import { useTaskContext } from "../context/ContextProvider";
import { useModalContext } from "../context/ModalProvider";
import { IoIosSearch } from "react-icons/io";



const NavBar = () => {
    const { tasks } = useTaskContext();
    const { toggleModal } = useModalContext();
    const activeLink = 'text-[#FFFFFF]';
    const normalLink = 'text-[#606060]';


    return (
        <>
            <div className="text-right">
                <button className="w-[150px] uppercase bg-[#FFFFFF] h-10 text-[#000000] rounded-[2px] text-md mb-4" onClick={toggleModal}>Add Task</button>
            </div>
            <ul className="flex justify-between items-center text-xl border-b-2 border-slate-500 pb-2">
                <div>
                    <li className="inline-block mr-4"><NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>Current ({tasks ? tasks.filter(task => task.status === "pending").length : 0})</NavLink></li>
                    <li className="inline-block"><NavLink to="/finishedTasks" className={({ isActive }) => isActive ? activeLink : normalLink}>Finished ({tasks ? tasks.filter(task => task.status === "completed").length : 0})</NavLink></li>
                </div>
                <div className="relative">
                    <input type="text" className="bg-[#DCDCDC] w-[330px] rounded-md py-1 px-2" />
                    <IoIosSearch className="absolute top-2 right-2 text-black" />
                </div>
            </ul>

        </>

    )
}

export default NavBar;
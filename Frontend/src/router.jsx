import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./views/DefaultLayout";

import { CurrentTasksLists } from "./components/CurrentTasksLists";
import { FinishedTasksLists } from "./components/FinishedTasksLists";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <CurrentTasksLists />
            },
            {
                path: '/finishedTasks',
                element: <FinishedTasksLists />
            }
        ]

    },

])

export default router;
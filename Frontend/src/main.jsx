import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { TaskProvider } from './context/ContextProvider.jsx';
import { ModalProvider } from './context/ModalProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </TaskProvider>
  </React.StrictMode>,
)

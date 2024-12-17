import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AdminPanel from "./Components/AdminPanel/AdminPanel.jsx";
import RecipieManagement from "./Components/RecipieManagement/RecipieManagement.jsx";
import UserManagement from "./Components/UserManagemenr/UserManagement.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminPanel/>,
    },
    {
        path: "/recipieManagement",
        element: <RecipieManagement/>,
    },
    {
        path: "/userManagement",
        element: <UserManagement/>,
    }


]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

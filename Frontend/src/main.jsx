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
import UserProfile from './Components/UserProfile/UserProfile.jsx';
import Login from "./pages/login.jsx"
import Register from './pages/register.jsx';


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
    },

    {
        path: "/userProfile",
        element: <UserProfile/>,
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }


]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

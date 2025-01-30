import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import UnregViewMore from './Components/Unregistered User View more Page/UnregViewMore.jsx';
import RegViewMore from './Components/Registered User View More Page/RegViewMore.jsx';
import FullViewMore from './Components/FullRecipeViewMore/FullRecipeViewMore.jsx';
import AdminPanel from "./Components/AdminPanel/AdminPanel.jsx";
import RecipieManagement from "./Components/RecipieManagement/RecipieManagement.jsx";
import UserManagement from "./Components/UserManagemenr/UserManagement.jsx";
import Login from "./pages/login.jsx";
import Registration from "./pages/Register.jsx";
import AddRecipies from "./Components/AddRecipies/AddRecipies.jsx";
import UserProfile from './Components/UserProfile/UserProfile.jsx';
import FullRecipeViewMore from "./Components/FullRecipeViewMore/FullRecipeViewMore.jsx";




const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
        {
            path: '',
            element: <Home />,
        },
        {
            path: 'unreg-view-more',
            element: <UnregViewMore />,
        },
        {
            path: 'reg-view-more',
            element: <RegViewMore />,
        },
        {
            path: 'full-recipe-view-more',
            element: <FullViewMore />,
        },
        {
          path: "/admin",
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
               path: "/addRecipies",
               element:<AddRecipies/>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Registration/>
       
    },

    {
        path: "/userProfile",
        element: <UserProfile/>,
    },
            {
                path:"/full-recipe/:recipeId",
                element:<FullRecipeViewMore />,
            },
        ],
      },

]);




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

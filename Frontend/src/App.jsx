import React from 'react';
import { Outlet } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import Header from "./Components/Header/Header.jsx";
import AdminPanel from "./Components/AdminPanel/AdminPanel.jsx";
import UserProfile from './Components/UserProfile/UserProfile.jsx';

function App() {


    return (
      <>
      <Outlet />
      </>
    )
  }

export default App;

import React from 'react';
import '../RegUserHeader/RegUserHeader.css';
import logo from '../../assets/logojpg.jpg';
import userProfileImage from '../../assets/userProfile.png';

const AdminHeader = () => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    const username = loggedUser.name;
    return (
        <header className="navigationBar">
            <div className="container">
                <div className="logo">
                    <a href="#"><img src={logo} alt="logo" /></a>
                </div>
                <button className="menu-toggle" aria-label="Toggle navigation">
                    <span className="menu-icon"></span>
                </button>
                <nav className="nav-menu">
                    <ul className="nav-links">
                        <li className="nav-item"><a href="/" className="nav-link1 active">Home</a></li>
                    </ul>
                    <ul className="nav-links">
                        <li className="nav-item"><a href="/reg-view-more" className="nav-link1 active">Recipies</a></li>
                    </ul>
                    <ul className="nav-links">
                        <li className="nav-item"><a href="/userProfile" className="nav-link1 active">Profile</a></li>
                    </ul>
                    <ul className="nav-links">
                        <li className="nav-item"><a href="/admin" className="nav-link1 active">Admin Panel</a></li>
                    </ul>
                </nav>
                <div className="welcome-section">
                    <p className="welcome-text">Welcome! , {username}</p>
                    <img
                        src={userProfileImage}
                        alt="User Profile"
                        className="user-profile-image"
                    />
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;

import React from 'react';
import './UnregUserHeader.css';
import logo from '../../assets/logojpg.jpg';

const Header = () => {
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
                        <li className="nav-item"><a href="#" className="nav-link1 active">Home</a></li>
                        <li className="nav-item"><a href="#what-we-offer" className="nav-link1">Recipier</a></li>
                        <li className="nav-item"><a href="#about-us" className="nav-link1">About Us</a></li>
                        <li className="nav-item"><a href="#contact-us" className="nav-link1">Contact Us</a></li>
                    </ul>
                </nav>
                <div className="auth-buttons">
                    <a href="#" className="btn1 register-btn1">Register</a>
                    <a href="#" className="btn1 login-btn1">Login</a>
                </div>
            </div>
        </header>
    );
};

export default Header;

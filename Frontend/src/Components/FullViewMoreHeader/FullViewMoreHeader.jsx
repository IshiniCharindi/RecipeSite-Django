import React from 'react';
import './FullViewMoreHeader.css';
import logo from '../../assets/logojpg.jpg';

const FullViewMoreHeader = () => {
    const username = "Nivethan";
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
                        <li className="nav-item"><a href="#" className="nav-link1 active">News Feed</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default FullViewMoreHeader;

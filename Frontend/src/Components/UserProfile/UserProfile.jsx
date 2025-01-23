
import React from 'react';
import './UserProfile.css'; // Make sure the CSS is in the same directory
import profile from '../../assets/icon1.png';


const UserProfile = () => {
    return (
        <div className="profile-container">
            <div className="profile-section">
                <h1>Saru</h1>
                <div className="profile-about-me">
                    <div className="profile-pic">
                        <img src={profile} alt="" />
                    </div>
                    <h3>About Me</h3>
                    <p>
                        As a personal trainer, I need an easy-to-use app where I can see my schedule,
                        manage my appointments, and add new members.
                    </p>
                </div>
            </div>

            <div className="profile-user-details">
                <form className="profile-form">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" id="username" placeholder="Sharu" />

                    {/* <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phone" placeholder="+94771191166" /> */}

                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" placeholder="email@gmail.com" />

                    <button type="button" className="change-password">Change Password</button>

                    <div className="buttons">
                        <button type="submit" className="save">Save</button>
                        <button type="button" className="signout">Sign Out</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;


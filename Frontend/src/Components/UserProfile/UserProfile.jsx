import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';
import RegUserHeader from "../RegUserHeader/RegUserHeader.jsx";
import Footer from "../Footer/Footer.jsx";

const UserProfile = () => {
    const [userData, setUserData] = useState({ name: '', email: '' });
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordData, setPasswordData] = useState({ old_password: '', new_password: '' });
    const [error, setError] = useState('');

    // Fetch user data from localStorage when the component mounts
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        } else {
            console.error('User data not found in localStorage.');
        }
    }, []);

    // Handle input change for name and email
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // Handle form submission (Save button)
    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://127.0.0.1:8000/api/updates/', userData);
            alert('Profile updated successfully');
            localStorage.setItem('user', JSON.stringify(userData)); // Save updated user data to localStorage
        } catch (error) {
            console.error('Error updating profile', error);
            setError('Failed to update profile. Please try again.');
        }
    };

    // Handle password change submission
    const handleChangePassword = async (e) => {
        e.preventDefault();
        const data = {
            email: userData.email, // Include the email from userData
            old_password: passwordData.old_password,
            new_password: passwordData.new_password
        };
        try {
            console.log(data)
            await axios.put('http://127.0.0.1:8000/api/updates/', data);
            alert('Password changed successfully');
            setShowPasswordModal(false); // Close modal on success
            setPasswordData({ old_password: '', new_password: '' }); // Reset password fields
        } catch (error) {
            setError('Failed to change password. Please try again.');
        }
    };

    // Handle sign-out
    const handleSignOut = () => {
        localStorage.clear();
        window.location.href = '/login'; // Redirect to login page
    };

    return (
        <div>
            <RegUserHeader />
            <div className="profile-container">

                <div className="profile-section">
                    <h1>{userData.name}</h1>
                    <div className="profile-about-me">
                        <div className="profile-pic">
                            <img src="/assets/icon1.png" alt="Profile Pic" />
                        </div>
                        <h3>About Me</h3>
                        <p>As a personal trainer, I need an easy-to-use app where I can see my schedule, manage my appointments, and add new members.</p>
                    </div>
                </div>

                <div className="profile-user-details">
                    <form className="profile-form" onSubmit={handleSave}>
                        <label htmlFor="username">User Name:</label>
                        <input
                            type="text"
                            id="username"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                        />

                        <button
                            type="button"
                            className="change-password"
                            onClick={() => setShowPasswordModal(true)}
                        >
                            Change Password
                        </button>

                        <div className="buttons">
                            <button type="submit" className="save">Save</button>
                            <button type="button" className="signout" onClick={handleSignOut}>Sign Out</button>
                        </div>
                    </form>
                </div>

                {showPasswordModal && (
                    <div className="modal" role="dialog" aria-labelledby="change-password-title">
                        <div className="modal-overlay">
                            <div className="modal-content">
                                <h2 id="change-password-title">Change Password</h2>
                                <form onSubmit={handleChangePassword}>
                                    <label htmlFor="old_password">Old Password</label>
                                    <input
                                        type="password"
                                        id="old_password"
                                        value={passwordData.old_password}
                                        onChange={e => setPasswordData({ ...passwordData, old_password: e.target.value })}
                                        required
                                        name="password"
                                    />

                                    <label htmlFor="new_password">New Password</label>
                                    <input
                                        type="password"
                                        id="new_password"
                                        value={passwordData.new_password}
                                        onChange={e => setPasswordData({ ...passwordData, new_password: e.target.value })}
                                        required
                                        name="newPassword"
                                    />

                                    <div className="modal-buttons">
                                        <button type="submit" className="save">Save</button>
                                        <button type="button" className="cancel" onClick={() => setShowPasswordModal(false)}>Cancel</button>
                                    </div>

                                    {error && <p className="error-message">{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </div>

    );
};

export default UserProfile;

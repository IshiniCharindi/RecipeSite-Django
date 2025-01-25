import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css'; 

const UserProfile = () => {
    const [userData, setUserData] = useState({ name: '', email: '' });
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordData, setPasswordData] = useState({ old_password: '', new_password: '' });
    const [error, setError] = useState('');

    // Fetch user profile details
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/profile/')
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data', error);
            });
    }, []);

    // Handle input change for name and email
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // Handle form submission (Save button)
    const handleSave = (e) => {
        e.preventDefault();
        // Submit updated user details to the backend
        axios.put('http://127.0.0.1:8000/api/profile/', userData)
            .then(response => {
                alert('Profile updated successfully');
            })
            .catch(error => {
                console.error('Error updating profile', error);
            });
    };

    // Handle password change submission
    const handleChangePassword = (e) => {
        e.preventDefault();
        // Call the API to change the password
        axios.post('http://127.0.0.1:8000/api/change-password/', passwordData)
            .then(response => {
                alert('Password changed successfully');
                setShowPasswordModal(false); // Close modal on success
            })
            .catch(error => {
                setError('Failed to change password. Please try again.');
            });
    };

    return (
        <div className="profile-container">
            <div className="profile-section">
                {/* Display the dynamically updated user name */}
                <h1>{userData.name}</h1>
                <div className="profile-about-me">
                    <div className="profile-pic">
                        <img src="src/assets/icon1.png" alt="Profile Pic" />
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

                    <button type="button" className="change-password" onClick={() => setShowPasswordModal(true)}>Change Password</button>

                    <div className="buttons">
                        {/* Save button */}
                        <button type="submit" className="save">Save</button>
                        <button type="button" className="signout">Sign Out</button>
                    </div>
                </form>
            </div>

            {showPasswordModal && (
                <div className="modal">
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <form onSubmit={handleChangePassword}>
                                <label htmlFor="old_password">Old Password</label>
                                <input 
                                    type="password" 
                                    id="old_password" 
                                    value={passwordData.old_password}
                                    onChange={e => setPasswordData({ ...passwordData, old_password: e.target.value })} 
                                    required 
                                />

                                <label htmlFor="new_password">New Password</label>
                                <input 
                                    type="password" 
                                    id="new_password" 
                                    value={passwordData.new_password}
                                    onChange={e => setPasswordData({ ...passwordData, new_password: e.target.value })} 
                                    required 
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
    );
};

export default UserProfile;

import React, { useEffect, useState } from 'react';
import Header from "../Header/Header.jsx";
import './UserManagement.css';
import axios from "axios";
import DeleteModal from '../UserManagemenr/Modals/DeleteModal/DeleteModal.jsx';
import EditModal from '../UserManagemenr/Modals/EditModal/EditModal.jsx';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    // Fetch all users
    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Handle Delete Button Click
    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };

    // Handle Confirm Delete
    const handleDeleteConfirm = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/users/${selectedUser.id}/`);
            setUsers(users.filter(u => u.id !== selectedUser.id));
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // Handle Edit Button Click
    const handleEditClick = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
    };

    // Handle User Update
    const handleUpdateUser = async (updatedUser) => {
        try {
            const response = await axios.put(`http://localhost:8000/api/users/${updatedUser.id}/`, updatedUser);
            setUsers(users.map(u => (u.id === updatedUser.id ? response.data : u)));
            setShowEditModal(false);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <Header />
            <div className="userTitle">
                <h1>User Management</h1>
            </div>
            <div className="tableContent">
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <div className="btn-group" role="group">
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={() => handleEditClick(user)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteClick(user)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {showDeleteModal && (
                <DeleteModal
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={handleDeleteConfirm}
                />
            )}

            {showEditModal && selectedUser && (
                <EditModal
                    user={selectedUser}
                    onClose={() => setShowEditModal(false)}
                    onUpdate={handleUpdateUser}
                />
            )}
        </div>
    );
};

export default UserManagement;

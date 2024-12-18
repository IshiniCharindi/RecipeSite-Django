import React, { useEffect, useState } from 'react';
import Header from "../Header/Header.jsx";
import './UserManagement.css';
import axios from "axios";
import DeleteModal from '../UserManagemenr/Modals/DeleteModal/DeleteModal.jsx';

const UserManagement = () => {
    const [user, setUser] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/');
            console.log(response.data);
            setUser(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/${selectedUser.id}/`);
            setUser(user.filter(u => u.id !== selectedUser.id));
            setShowDeleteModal(false);
        } catch (error) {
            console.error(error);
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
                        <p>hello</p>
                    </tr>
                    </thead>
                    <tbody>
                    {user.map((users, index) => (
                        <tr key={index}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: '45px', height: '45px' }}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">{users.id}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{users.name}</p>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{users.email}</p>
                            </td>
                            <td>
                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" className="btn btn-warning">Edit</button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteClick(users)}
                                    >
                                        Delete
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
        </div>
    );
};

export default UserManagement;

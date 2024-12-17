import React from 'react';
import Header from "../Header/Header.jsx";
import './RecipieManagement.css'

const RecipieManagement = () => {
    return (
        <>
            <Header/>
            <div className="recipeTitle">
                <h1>Recipie Management</h1>
            </div>
            <div className="tableContent">
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                    <tr>
                        <th>Username</th>
                        <th>Recipie Title</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                    alt=""
                                    style={{'width': '45px', 'height': '45px'}}
                                    className="rounded-circle"
                                />
                                <div className="ms-3">
                                    <p className="fw-bold mb-1">John Doe</p>
                                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">Software engineer</p>
                            <p className="text-muted mb-0">IT department</p>
                        </td>
                        <td>
                            <span className="badge badge-success rounded-pill d-inline">Active</span>
                        </td>
                        <td>
                            <button type="button" className="btn btn-link btn-sm btn-rounded">
                                View
                            </button>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </>

    );
};

export default RecipieManagement;
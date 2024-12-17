import React from 'react';
import ManagementBox from "./ManagementBox/ManagementBox.jsx";
import Header from "../Header/Header.jsx";
import './AdminPanel.css';

const AdminPanel = () => {
    return (
        <>
            <Header />
            <div className="ManagementContainer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ManagementBox title="Recipie Management" link={"/recipieManagement"}/>
                        </div>
                        <div className="col">
                            <ManagementBox title="User Management" link={"/userManagement"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;

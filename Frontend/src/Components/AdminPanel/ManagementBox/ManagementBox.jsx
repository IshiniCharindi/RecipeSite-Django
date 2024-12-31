import React from 'react';
import './ManagementBox.css'

const ManagementBox = ({title,link}) => {
    return (
        <div>
            <div className="card">
                <div className="card-body mgBody">
                        <h3 className="card-title">{title}</h3>
                        <a href={link}><button type="button" className="btn btn-cd">View</button></a>
                </div>
            </div>
        </div>
    );
};

export default ManagementBox;
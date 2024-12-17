import React from 'react';
import './ManagementBox.css'

const ManagementBox = ({title,link}) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div>
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <div>
                        <a href={link}><button type="button" className="btn btn-primary">View</button></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManagementBox;
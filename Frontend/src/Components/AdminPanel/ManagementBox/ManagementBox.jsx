import React from 'react';
import './ManagementBox.css'

const ManagementBox = ({title,link}) => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div>
                        <h3 className="card-title">{title}</h3>
                    </div>
                    <div>
                        <a href={link}><button type="button" className="btn btn-cd">View</button></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManagementBox;
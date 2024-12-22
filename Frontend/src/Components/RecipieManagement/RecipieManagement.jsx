import React, {useState, useEffect} from 'react';
import Header from "../Header/Header.jsx";
import './RecipieManagement.css';
import axios from 'axios';

const RecipieManagement = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/recipies/')
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    const updateStatus = (recipeId, status) => {
        axios.post(`http://127.0.0.1:8000/api/recipies/${recipeId}/update_status/`, {status})
            .then(response => {
                alert(response.data.message);
                setRecipes(prev => prev.map(recipe => recipe.id === recipeId ? {...recipe, status} : recipe));
            })
            .catch(error => console.error('Error updating status:', error));
    };

    return (<>
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
                    {recipes.map(recipe => (<tr key={recipe.id}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src={recipe.image1}
                                        alt=""
                                        style={{width: '45px', height: '45px'}}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">{recipe.title}</p>
                                        <p className="text-muted mb-0">{recipe.description}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{recipe.title}</p>
                            </td>
                            <td>
                                   <span className={`badge rounded-pill d-inline 
                                            ${recipe.status === 'A' ? 'badge-success' : recipe.status === 'P' ? 'badge-warning' : 'badge-danger'}`}>
                                            {recipe.status === 'A' ? 'Approved' : recipe.status === 'P' ? 'Pending' : 'Rejected'}
                                    </span>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-link btn-sm btn-rounded"
                                    onClick={() => updateStatus(recipe.id, 'A')}
                                >
                                    Approve
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-link btn-sm btn-rounded"
                                    onClick={() => updateStatus(recipe.id, 'R')}
                                >
                                    Reject
                                </button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </>);
};

export default RecipieManagement;

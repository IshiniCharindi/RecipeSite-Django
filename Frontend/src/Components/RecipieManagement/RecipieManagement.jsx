import React, { useState, useEffect } from 'react';
import Header from "../Header/Header.jsx";
import './RecipieManagement.css';
import axios from 'axios';
import Footer from "../Footer/Footer.jsx";

const RecipieManagement = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null); // For detailed view

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/recipies/')
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    const updateStatus = (recipeId, status) => {
        axios.post(`http://127.0.0.1:8000/api/recipies/${recipeId}/update_status/`, { status })
            .then(response => {
                alert(response.data.message);
                setRecipes(prev => prev.map(recipe => recipe.id === recipeId ? { ...recipe, status } : recipe));
                setSelectedRecipe(null); // Close modal after updating
            })
            .catch(error => console.error('Error updating status:', error));
    };

    const pendingRecipes = recipes.filter(recipe => recipe.status === 'P');
    const processedRecipes = recipes.filter(recipe => recipe.status !== 'P'); // Approved or Rejected

    return (
        <>
            <Header />
            <div className="recipeTitle">
                <h1>Recipie Management</h1>
            </div>

            {/* Pending Recipes Table */}
            <div className="tableContent">
                <h2>Pending Recipes</h2>
                {pendingRecipes.length > 0 ? (
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
                        {pendingRecipes.map(recipe => (
                            <tr key={recipe.id}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={recipe.image1}
                                            alt=""
                                            style={{ width: '45px', height: '45px' }}
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
                                    <span className="badge rounded-pill d-inline badge-warning">Pending</span>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-link btn-sm btn-rounded"
                                        onClick={() => setSelectedRecipe(recipe)}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No new recipes to review.</p>
                )}
            </div>

            {/* Processed Recipes Table */}
            <div className="tableContent">
                <h2>Processed Recipes</h2>
                {processedRecipes.length > 0 ? (
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
                        {processedRecipes.map(recipe => (
                            <tr key={recipe.id}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={recipe.image1}
                                            alt=""
                                            style={{ width: '45px', height: '45px' }}
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
                                        <span
                                            className={`badge rounded-pill d-inline ${
                                                recipe.status === 'A' ? 'badge-success' : 'badge-danger'
                                            }`}
                                        >
                                            {recipe.status === 'A' ? 'Approved' : 'Rejected'}
                                        </span>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-link btn-sm btn-rounded"
                                        onClick={() => setSelectedRecipe(recipe)}
                                    >
                                        View
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-link btn-sm btn-rounded"
                                        onClick={() =>
                                            updateStatus(recipe.id, recipe.status === 'A' ? 'R' : 'A')
                                        }
                                    >
                                        {recipe.status === 'A' ? 'Reject' : 'Approve'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No processed recipes found.</p>
                )}
            </div>
            <Footer/>
            {/* Detailed View Modal */}
            {selectedRecipe && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{selectedRecipe.title}</h2>
                        <div className="image-container">
                            <img
                                src={selectedRecipe.image1}
                                alt="Recipe"
                                style={{ width: '40%', height: 'auto', marginBottom: '20px' }}
                            />
                            <img
                                src={selectedRecipe.image2}
                                alt="Recipe"
                                style={{ width: '40%', height: 'auto', marginBottom: '20px' }}
                            />
                        </div>

                        <p><strong>Description:</strong> {selectedRecipe.description}</p>
                        <p><strong>Ingredients:</strong> {selectedRecipe.ingredients}</p>
                        <p><strong>Instructions:</strong> {selectedRecipe.instructions}</p>

                        <div className="modal-actions">
                            {selectedRecipe.status === 'P' && (
                                <>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => updateStatus(selectedRecipe.id, 'A')}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => updateStatus(selectedRecipe.id, 'R')}
                                    >
                                        Reject
                                    </button>
                                </>
                            )}
                            <button
                                className="btn btn-secondary"
                                onClick={() => setSelectedRecipe(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default RecipieManagement;

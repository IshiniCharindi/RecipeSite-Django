import React, { useState, useEffect } from 'react';
import Header from "../Header/Header.jsx";
import './RecipieManagement.css';
import axios from 'axios';
import Footer from "../Footer/Footer.jsx";

const RecipieManagement = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

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
                setSelectedRecipe(null);
            })
            .catch(error => console.error('Error updating status:', error));
    };

    const pendingRecipes = recipes.filter(recipe => recipe.status === 'P');
    const processedRecipes = recipes.filter(recipe => recipe.status !== 'P');

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
                    <table className="table align-middle">
                        <thead>
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
                                            className="recipe-image"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold">{recipe.title}</p>
                                            <p className="text-muted">{recipe.description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>{recipe.title}</td>
                                <td>
                                    <span className="badge badge-warning">Pending</span>
                                </td>
                                <td>
                                    <button
                                        className="btn-view"
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
                    <p className="no-data">No new recipes to review.</p>
                )}
            </div>

            {/* Processed Recipes Table */}
            <div className="tableContent">
                <h2>Processed Recipes</h2>
                {processedRecipes.length > 0 ? (
                    <table className="table align-middle">
                        <thead>
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
                                            className="recipe-image"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold">{recipe.title}</p>
                                            <p className="text-muted">{recipe.description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>{recipe.title}</td>
                                <td>
                                        <span
                                            className={`badge ${
                                                recipe.status === 'A' ? 'badge-success' : 'badge-danger'
                                            }`}
                                        >
                                            {recipe.status === 'A' ? 'Approved' : 'Rejected'}
                                        </span>
                                </td>
                                <td>
                                    <button
                                        className="btn-view"
                                        onClick={() => setSelectedRecipe(recipe)}
                                    >
                                        View
                                    </button> &nbsp;
                                    <button
                                        className="btn-toggle"
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
                    <p className="no-data">No processed recipes found.</p>
                )}
            </div>
            <Footer />

            {/* Detailed View Modal */}
            {selectedRecipe && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{selectedRecipe.title}</h2>
                        <div className="image-container">
                            <img src={selectedRecipe.image1} alt="Recipe" className="modal-image" />
                            <img src={selectedRecipe.image2} alt="Recipe" className="modal-image" />
                        </div>
                        <p><strong>Description:</strong> {selectedRecipe.description}</p>
                        <p><strong>Ingredients:</strong> {selectedRecipe.ingredients}</p>
                        <p><strong>Instructions:</strong> {selectedRecipe.instructions}</p>
                        <div className="modal-actions">
                            {selectedRecipe.status === 'P' && (
                                <>
                                    <button
                                        className="btn-approve"
                                        onClick={() => updateStatus(selectedRecipe.id, 'A')}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="btn-reject"
                                        onClick={() => updateStatus(selectedRecipe.id, 'R')}
                                    >
                                        Reject
                                    </button>
                                </>
                            )}
                            <button
                                className="btn-close"
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

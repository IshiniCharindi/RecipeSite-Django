import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UnregUserHeader from '../UnregUserHeader/UnregUserHeader.jsx';
import Footer from '../Footer/Footer.jsx';
import foodSymbol from '../../assets/food-symbol.png';
import './UnregViewMore.css';
import axios from 'axios';

const UnregViewMore = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch recipes from the API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/recipies/')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  // Navigate to Add Recipe page
  const handleAddRecipeClick = () => {
    navigate('/add-recipe');
  };

  // Navigate to Full Recipe View
  const handleViewMore = (recipeId) => {
    navigate(`/full-recipe-view-more/${recipeId}`);
  };

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <UnregUserHeader />
      <div className="unreg-viewmore">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search recipe here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="add-recipe-button" onClick={handleAddRecipeClick}>
            + Add Recipe
          </button>
        </div>
        <div className="recipe-grid">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div className="recipe-card" key={recipe.id}>
                <img
                  src={recipe.image1}
                  alt={recipe.title}
                  className="recipe-image"
                />
                <div className="recipe-info">
                  <h3>
                    <img src={foodSymbol} alt="Food Symbol" className="food-symbol" />
                    {recipe.title}
                  </h3>
                  <button
                    className="view-more-button"
                    onClick={() => handleViewMore(recipe.id)}
                  >
                    VIEW MORE
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UnregViewMore;

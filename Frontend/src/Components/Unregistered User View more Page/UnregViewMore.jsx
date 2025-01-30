import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer.jsx';
import foodSymbol from '../../assets/food-symbol.png';
import './UnregViewMore.css';
import UnregUserHeader from "../UnregUserHeader/UnregUserHeader.jsx";

const RegViewMore = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/recipies/')
        .then(response => {
          setRecipes(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching recipes:', error);
        });
  }, []);

  return (
      <>
        <UnregUserHeader />
        <div className="unreg-viewmore">
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search recipe here" />
            <a href="/addRecipies"> <button className="add-recipe-button">+ Add Recipe</button></a>
          </div>
          <div className="recipe-grid">
            {recipes.map((recipe, index) => (
                <div className="recipe-card" key={index}>
                  <img src={recipe.image1} alt={recipe.title} className="recipe-image" />
                  <div className="recipe-info">
                    <h3>
                      <img src={foodSymbol} alt="Food Symbol" className="food-symbol" />
                      {recipe.title}
                    </h3>
                    <p><i>**{recipe.description}**</i></p>
                    <button className="view-more-button">VIEW MORE</button>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
  );
};

export default RegViewMore;
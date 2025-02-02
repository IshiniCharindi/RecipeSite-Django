import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer.jsx';
import foodSymbol from '../../assets/food-symbol.png';
import './UnregViewMore.css';
import UnregUserHeader from "../UnregUserHeader/UnregUserHeader.jsx";
import {useNavigate} from "react-router-dom";

const RegViewMore = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/recipes/')
            .then(response => {
                const activeRecipes = response.data.filter(recipe => recipe.status === 'A');
                setRecipes(activeRecipes);
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
            });
    }, []);

    const handleViewMore = (id) => {
        navigate(`/full-recipe/${id}`);
    };
  return (
      <>
        <UnregUserHeader />
        <div className="unreg-viewmore">
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search recipe here" />
            {/*<a href="/addRecipies"> <button className="add-recipe-button">+ Add Recipe</button></a>*/}
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
                    <button className="view-more-button" onClick={() => handleViewMore(recipe.id)}>VIEW MORE</button>
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
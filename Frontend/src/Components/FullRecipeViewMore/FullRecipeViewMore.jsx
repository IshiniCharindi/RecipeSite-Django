import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FullViewMoreHeader from '../FullViewMoreHeader/FullViewMoreHeader.jsx';
import Footer from '../Footer/Footer.jsx';
import './FullRecipeViewMore.css';

const FullRecipeViewMore = () => {
  const { recipeId } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/recipies/${recipeId}/`)
        .then(response => {
          setRecipe(response.data);
        })
        .catch(error => {
          console.error('Error fetching recipe details:', error);
        });
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
      <>
        <FullViewMoreHeader />
        <div className="recipe-page">
          <div className="recipe-container">
            <h1 className="recipe-title">{recipe.title}</h1>
            <img src={recipe.image1} alt={recipe.title} className="recipe-image" />
            <p className="recipe-description">{recipe.description}</p>

            <div className="recipe-sections">
              <div className="ingredients">
                <h2>Ingredients</h2>
                <ul>
                  {recipe.ingredients.split(',').map((ingredient, index) => (
                      <li key={index}>{ingredient.trim()}</li>
                  ))}
                </ul>
              </div>

              <div className="steps">
                <h2>Steps</h2>
                <ol>
                  {recipe.steps.split('.').map((step, index) => (
                      step.trim() && <li key={index}>{step.trim()}.</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="ratings-reviews">
              <h2>Ratings & Reviews</h2>
              <button className="add-review-button">+ Add Review</button>
              <div className="reviews-container">
                {recipe.reviews?.map((review, index) => (
                    <div className="review-card" key={index}>
                      <div className="review-header">
                        <div className="review-user">{review.user}</div>
                        <div className="review-rating">
                          {'⭐'.repeat(review.rating)}
                        </div>
                      </div>
                      <p className="review-text">{review.comment}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
  );
};

export default FullRecipeViewMore;

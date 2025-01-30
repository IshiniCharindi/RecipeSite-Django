import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FullViewMoreHeader from "../FullViewMoreHeader/FullViewMoreHeader.jsx";
import Footer from "../Footer/Footer.jsx";
import AddReview from "../AddReview/AddReview.jsx";
import axios from "axios";
import "./FullRecipeViewMore.css";

const FullRecipeViewMore = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchRecipeAndReviews = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/recipies/${id}/`);
        const recipeData = response.data;

        setRecipe({
          ...recipeData,
          ingredients: recipeData.ingredients ? recipeData.ingredients.split("\n") : [],
          steps: recipeData.steps ? recipeData.steps.split("\n") : [],
        });

        // Set reviews separately
        setReviews(recipeData.reviews);
      } catch (err) {
        setError("Failed to fetch recipe details or reviews.");
        console.error("Error fetching recipe:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeAndReviews();
  }, [id]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  if (loading) return <p>Loading recipe details...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>Recipe not found.</p>;

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
                {recipe.ingredients.length > 0 ? (
                  recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.trim()}</li>
                  ))
                ) : (
                  <li>No ingredients available.</li>
                )}
              </ul>
            </div>

            <div className="steps">
              <h2>Steps</h2>
              <ol>
                {recipe.steps.length > 0 ? (
                  recipe.steps.map((step, index) => (
                    <li key={index}>{step.trim()}</li>
                  ))
                ) : (
                  <li>No steps available.</li>
                )}
              </ol>
            </div>
          </div>

          <div className="ratings-reviews">
            <h2>Ratings & Reviews</h2>
            <button className="add-review-button" onClick={togglePopup}>
              + Add Review
            </button>

            

            <div className="reviews-container">
              {/* If loading, show a loading message */}
              {loading ? (
                <p>Loading reviews...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                reviews.map((review, index) => (
                  <div key={review.id || index} className="review-card">
                    <div className="review-header">
                      <div className="review-user">{review.name}</div>
                      <div className="review-rating">
                        {"★".repeat(review.rating)}{" "}
                        {"☆".repeat(5 - review.rating)}
                      </div>
                    </div>
                    <p className="review-text">{review.review_text}</p>
                  </div>
                ))                
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <AddReview isPopupOpen={isPopupOpen} togglePopup={togglePopup} recipeId={id} />
    </>
  );
};

export default FullRecipeViewMore;
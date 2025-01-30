import React, { useState, useEffect } from "react";
import "./AddReview.css";
import axios from "axios";

const AddReview = ({ isPopupOpen, togglePopup, recipeId }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Received recipeId:", recipeId); // Debugging line
  }, [recipeId]);

  const handleConfirm = async () => {
    if (!name || rating === 0 || !review) {
      setError("All fields are required.");
      return;
    }

    if (!recipeId) {
      console.error("Recipe ID is missing.");
      setError("Invalid recipe. Please try again.");
      return;
    }

    try {
      const data = { name, rating, review_text: review, recipe: recipeId };
      
      console.log("Sending data:", data);

      const response = await axios.post("http://127.0.0.1:8000/api/reviews/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        alert("Review added successfully!");
        togglePopup();
        setName("");
        setRating(0);
        setReview("");
        window.location.reload();
      }
    } catch (err) {
      console.error("Error adding review:", err);
      setError(err.response?.data?.message || "Failed to submit review. Please try again.");
    }
  };

  if (!isPopupOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2 className="popup-title">ADD REVIEW</h2>
        <div className="popup-input-group">
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name*"
            className="popup-input"
          />
        </div>
        <div className="popup-input-group">
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? "active" : ""}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="popup-input-group">
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write a review"
            className="popup-textarea"
          ></textarea>
        </div>
        <button onClick={handleConfirm} className="confirm-btn">
          Confirm
        </button>
        <button onClick={togglePopup} className="cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
};
export default AddReview;
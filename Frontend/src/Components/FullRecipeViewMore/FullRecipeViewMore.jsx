import React from 'react';
import FullViewMoreHeader from '../FullViewMoreHeader/FullViewMoreHeader.jsx';
import Footer from '../Footer/Footer.jsx';
import MongolianRice from '../../assets/Images/Mongolian Rice.jpg'
import './FullRecipeViewMore.css';

const FullRecipeViewMore = () => {
  return (
    <>
      <FullViewMoreHeader />
    <div className="recipe-page">
      <div className="recipe-container">
        <h1 className="recipe-title">Mongolian Rice</h1>
        <img
          src={MongolianRice}
          alt="Mongolian Rice" 
          className="recipe-image"
        />
        <p className="recipe-description">
        Mongolian Rice is a savory, stir-fried dish that combines tender meat, vibrant vegetables, and perfectly cooked rice, all coated in rich sauces like soy sauce and oyster sauce. The dish is inspired by Mongolian flavors, offering a balanced blend of sweet, salty, and umami tastes. It typically features a colorful mix of julienned carrots, bell peppers, and shredded cabbage, with an optional kick from chili flakes for heat. Garnished with green onions and sesame seeds, Mongolian Rice can be customized with chicken, beef, pork, or tofu, making it a versatile and satisfying meal suitable for any occasion. The dish is a perfect harmony of flavors and textures, from the tender meat to the crunchy vegetables and fluffy rice.
        </p>

        <div className="recipe-sections">
          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              <li>2 cups of cooked rice (preferably jasmine or basmati rice)</li>
              <li>200g beef or chicken, thinly sliced (optional for vegetarian skip)</li>
              <li>1 medium onion, finely chopped</li>
              <li>2 cloves garlic, minced</li>
              <li>1 medium carrot, thinly sliced</li>
              <li>1 bell pepper, sliced into thin strips</li>
              <li>1 cup cabbage, shredded</li>
              <li>1 tablespoon soy sauce</li>
              <li>1 tablespoon oyster sauce (optional)</li>
              <li>1 tablespoon sesame oil (for stir-frying)</li>
              <li>1 teaspoon chili flakes (optional for heat)</li>
              <li>2 tablespoons green onions (for garnish)</li>
              <li>1 teaspoon sesame seeds (for garnish)</li>
            </ul>
          </div>

          <div className="steps">
            <h2>Steps</h2>
            <ol>
              <li>Heat the vegetable oil in a large skillet or wok over medium-high heat.</li>
              <li>Add the beef or chicken and stir-fry until cooked; set aside.</li>
              <li>In the same skillet, sauté onion and garlic until fragrant.</li>
              <li>Add the carrots, bell peppers, and cabbage; stir-fry until vegetables are tender-crisp.</li>
              <li>Return the cooked meat (if using) to the skillet and mix well.</li>
              <li>Add the cooked rice to the skillet and stir to combine with the vegetables and meat.</li>
              <li>Stir in soy sauce, oyster sauce, and chili flakes.</li>
              <li>Cook for 2-3 minutes, ensuring all ingredients are evenly coated.</li>
              <li>Garnish with sesame seeds and green onions as desired.</li>
              <li>Serve hot and enjoy your flavorful Mongolian rice!</li>
            </ol>
          </div>
        </div>
        <div className="ratings-reviews">
            <h2>Ratings & Reviews</h2>
            <button className="add-review-button">+ Add Review</button>
            <div className="reviews-container">
              <div className="review-card">
                <div className="review-header">
                  <div className="review-user">N*****an</div>
                  <div className="review-rating">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="review-text">
                  It is very helpful to understand and improve my cooking knowledge.
                </p>
              </div>
              <div className="review-card">
                <div className="review-header">
                  <div className="review-user">D***ba</div>
                  <div className="review-rating">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="review-text">
                  It is very helpful to understand and improve my cooking knowledge.
                </p>
              </div>
            </div>
            
          </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default FullRecipeViewMore;

import React from 'react';
import RegUserHeader from '../RegUserHeader/RegUserHeader.jsx';
import Footer from '../Footer/Footer.jsx';
import foodImage1 from '../../assets/foodImages/foodImage1.jpg';
import foodImage2 from '../../assets/foodImages/foodImage2.jpg';
import foodImage3 from '../../assets/foodImages/foodImage3.jpg';
import foodImage4 from '../../assets/foodImages/foodImage4.jpg';
import foodImage5 from '../../assets/foodImages/foodImage5.jpg';
import foodImage6 from '../../assets/foodImages/foodImage6.jpg';
import foodImage7 from '../../assets/foodImages/foodImage7.jpg';
import foodImage8 from '../../assets/foodImages/foodImage8.jpg';
import foodImage9 from '../../assets/foodImages/foodImage9.jpg';
import foodImage10 from '../../assets/foodImages/foodImage10.jpg';
import foodSymbol from '../../assets/food-symbol.png'
import './RegViewMore.css';

const RegViewMore = () => {
  const recipes = [
    {
        name: "Mongolian Rice",
        cuisine: "Mongolian cuisine",
        image: foodImage1,
    },
    {
      name: "Pizza Margherita",
      cuisine: "Italian cuisine",
      image: foodImage2,
    },
    {
      name: "Biryani",
      cuisine: "Indian cuisine",
      image: foodImage3,
    },
    {
      name: "Butter Chicken",
      cuisine: "Indian cuisine",
      image: foodImage4,
    },
    {
      name: "Lamprais",
      cuisine: "Sri Lankan cuisine",
      image: foodImage5,
    },
    {
      name: "Sri Lankan Chicken Curry",
      cuisine: "Sri Lankan cuisine",
      image: foodImage6,
    },
    {
      name: "Kottu Roti",
      cuisine: "Sri Lankan cuisine",
      image: foodImage7,
    },
    {
      name: "Nasi Lemak",
      cuisine: "Singaporean cuisine",
      image: foodImage8,
    },
    {
      name: "Fried Rice",
      cuisine: "Chinese cuisine",
      image: foodImage9,
    },
    {
      name: "Apple Pie",
      cuisine: "American cuisine",
      image: foodImage10,
    },
    
  ];

  return (
    <>
      <RegUserHeader />
      <div className="unreg-viewmore">
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search recipe here" />
          <button className="add-recipe-button">+ Add Recipe</button>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <div className="recipe-info">
                <h3>
                  <img src={foodSymbol} alt="Food Symbol" className="food-symbol" />
                  {recipe.name}
                </h3>
                <p><i>**{recipe.cuisine}**</i></p>
                <button className="view-more-button">VIEW MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        
      </div>
      <Footer />
    </>
  );
};

export default RegViewMore;

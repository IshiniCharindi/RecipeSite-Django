import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import UnregUserHeader from '../UnregUserHeader/UnregUserHeader.jsx';
import Footer from '../Footer/Footer.jsx';
import aboutImage from '../../assets/about.jpg';
import contactImage from '../../assets/contact.jpg';
import sliderImage1 from '../../assets/slider1.jpg';
import sliderImage2 from '../../assets/slider2.jpg';
import sliderImage3 from '../../assets/slider3.jpg';
import sliderImage4 from '../../assets/slider4.jpg';
import sliderImage5 from '../../assets/slider5.jpg';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [message, setMessage] = useState('');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  };

  const handleViewMoreClick = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser){
      navigate('/unreg-view-more');
    }else{
      navigate('/reg-view-more');
    }

  }; 
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      phone_number: event.target.phoneNumber.value,
      message: event.target.message.value,
    };
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/contact/', data);
      alert(response.data.message); // Thank you for your feedback!
    } catch (error) {
      console.error(error);
      alert('Failed to submit the form. Please try again.');
    }
  };
  
  

  return (
    <><UnregUserHeader />
    <div>
      <div className='slider-container'>
        <Slider {...sliderSettings} className="slider">
          <div>
            <img src={sliderImage1} alt="Slide 1" className="slider-image" />
          </div>
          <div>
            <img src={sliderImage2} alt="Slide 2" className="slider-image" />
          </div>
          <div>
            <img src={sliderImage3} alt="Slide 3" className="slider-image" />
          </div>
          <div>
            <img src={sliderImage4} alt="Slide 4" className="slider-image" />
          </div>
          <div>
            <img src={sliderImage5} alt="Slide 5" className="slider-image" />
          </div>
        </Slider>

        <button className="view-more-btn" onClick={handleViewMoreClick}> View More </button>
      </div>

      <div className="about-us" id="about-us">
        <h2>About Us</h2>
        <div className="about-content">
          <div
            className="about-image"
            style={{
              backgroundImage: `url(${aboutImage})`,
            }}
          ></div>
          <div className="about-text">
            <div>
              <p>
              Welcome to FlavorCraft, your trusted culinary companion. Our mission is to make cooking enjoyable and accessible by offering a wide variety of recipes that suit every taste, occasion, and skill level. Whether you’re a beginner experimenting with new dishes or an experienced cook perfecting a classic, FlavorCraft is here to guide and inspire you.
              </p>
            </div>
            <div>
              <p>
              We believe that cooking is more than just preparing food; it’s about creating memorable experiences that bring people together. Our platform encourages you to explore new flavors, learn new techniques, and get creative with your meals. From simple weeknight dinners to festive feasts, we provide the tools and inspiration to make every dish special. Let’s cook, share, and celebrate the joy of food together!
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="what-we-offer" id="what-we-offer">
        <h2>What we offer</h2>
        <div className="offer-container">
          <div className="offer-card">
            <h3>
              <span>✨</span> Diverse Recipes
            </h3>
            <p>
              From classic comfort foods to global flavors and trending dishes,
              we have something for everyone. Explore our carefully curated
              collection of recipes designed to suit all tastes, dietary
              preferences, and skill levels.
            </p>
          </div>
          <div className="offer-card">
            <h3>
              <span>✨</span> Step-by-Step Guidance
            </h3>
            <p>
              Our recipes come with clear instructions, beautiful visuals, and
              helpful tips to ensure success in your kitchen every time.
            </p>
          </div>
          <div className="offer-card">
            <h3>
              <span>✨</span> Community-Centered
            </h3>
            <p>
              We value the power of shared experiences. Join our growing
              community of food enthusiasts to swap tips, share your creations,
              and celebrate the love of cooking together.
            </p>
          </div>
        </div>
      </div>

      <div className="contact-us" id="contact-us">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div
            className="contact-image"
            style={{
              backgroundImage: `url(${contactImage})`,
            }}
          ></div>
         <form className="contact-form" onSubmit={handleSubmit}>
            <label id="fullname" htmlFor="fullname" name="fullname">
              Fullname:
            </label>
            <input type="text" id="fullname" name="fullname" required />
            <label id="email" htmlFor="email" name="email">
              Email:
            </label>
            <input type="email" name="email" required />
            <label id="phonenumber" htmlFor="phonenumber" name="phonenumber">
              Phone Number:
            </label>
            <input type="tel" name="phoneNumber" required />
            <label id="message" htmlFor="message" name="message">
              Leave your feedback:
            </label>
            <textarea name="message"></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Home;

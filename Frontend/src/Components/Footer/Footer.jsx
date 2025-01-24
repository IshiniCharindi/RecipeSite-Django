import React from "react";
import "./Footer.css";
import logo from "../../assets/logojpg.jpg";
import facebookLogo from "../../assets/facebook.png";
import twitterLogo from "../../assets/twitter.png";
import instagramLogo from "../../assets/instagram.png";
import youtubeLogo from "../../assets/youtube.png";
import arrow from "../../assets/arrow.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src={logo} alt="FlavorCraft Logo" className="footer-logo" />
        <p className="footer-description">
          Your go-to site for easy and delicious recipes, cooking tips, and
          inspiration to make every meal special!
        </p>
      </div>

      <div className="footer-section">
        <h3 className="footer-title">Quick Links</h3>
        <ul className="footer-links">
          <li>
            <a href="#">
              <img src={arrow} alt="Arrow" className="arrow-icon" />
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <img src={arrow} alt="Arrow" className="arrow-icon" />
              Recipier
            </a>
          </li>
          <li>
            <a href="#">
              <img src={arrow} alt="Arrow" className="arrow-icon" />
              About Us
            </a>
          </li>
          <li>
            <a href="#">
              <img src={arrow} alt="Arrow" className="arrow-icon" />
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="footer-title cont">Contact</h3>
        <p className="footer-contact">
          <i className="fas fa-map-marker-alt"></i> No.72, Gourmet Street, Colombo 07, Sri Lanka.
        </p>
        <p className="footer-contact">
          <i className="fas fa-envelope"></i> info@flavorcraft.lk
        </p>
        <p className="footer-contact">
          <i className="fas fa-mobile"></i> +94 77 123 4567
        </p>

        <div className="footer-social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook Logo" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram Logo" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter Logo" className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtubeLogo} alt="YouTube Logo" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;

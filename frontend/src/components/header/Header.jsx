import React from 'react';
import './header.css';
import headerBg from '../../assets/header_img.png'

const Header = () => {
  return (
    <header 
      className="food-header-bg-container" 
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className="food-header-bg-overlay">
        <div className="food-header-bg-content">

          <h1 className="food-header-bg-title">
            Order your <br />
            favourite food here
          </h1>

          <p className="food-header-bg-description">
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest 
            ingredients and culinary expertise.
          </p>

          <div className="food-header-bg-btn-wrap">
            <button className="food-header-bg-button">
              View Menu
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
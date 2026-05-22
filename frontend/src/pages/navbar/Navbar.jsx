  import React from 'react'
  import './navbar.css'
  import {assets} from '../../assets/assets'

  const Navbar = () => {
    return (
      <div className='navbar'>
          <img className='navbar-logo'  src={assets.logo} alt="" />
          <ul className='navbar-menu' >
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile-App</li>
            <li>Contact Us</li>
          </ul>
          <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
              <img src={assets.basket_icon} alt="" />
              <div className="dot"></div>
            </div>
            <button>Sign in</button>
          </div>
      </div>
    )
  }

  export default Navbar
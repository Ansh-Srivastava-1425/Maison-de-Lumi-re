import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div>
          <img src={assets.logo} alt='Maison de Lumiere logo' className='footer-logo' />
          <p className='footer-brand'>Maison de Lumiere</p>
          <p className='footer-description'>
            Fresh, flavorful dishes crafted with a warm touch for every meal.
          </p>
        </div>

        <div className='footer-links'>
          <div>
            <h4>Explore</h4>
            <a href='/'>Home</a>
            <a href='/#explore-menu'>Menu</a>
            <a href='/place-order'>Place Order</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href='#'>Help Center</a>
            <a href='#'>Contact</a>
            <a href='#'>Delivery</a>
          </div>

          <div>
            <h4>Follow</h4>
            <a href='#'>Instagram</a>
            <a href='#'>Facebook</a>
            <a href='#'>Twitter</a>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© 2026 Maison de Lumiere. All rights reserved.</p>
        <p>Made with care for your next meal.</p>
      </div>
    </footer>
  )
}

export default Footer

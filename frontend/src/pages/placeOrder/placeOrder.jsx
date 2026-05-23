import React from 'react'
import './placeOrder.css'

const PlaceOrder = () => {
  return (
    <section className='place-order-page'>
      <div className='place-order-shell'>
        <h1>Place your order</h1>
        <p>
          This page is now styled responsively so the checkout flow will fit neatly across desktop, tablet, and mobile.
        </p>
        <div className='place-order-note'>
          Order details and checkout controls can be added here next.
        </div>
      </div>
    </section>
  )
}

export default PlaceOrder
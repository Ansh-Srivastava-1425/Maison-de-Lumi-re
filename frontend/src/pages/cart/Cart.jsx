import React from 'react'
import './cart.css'

const Cart = () => {
  return (
    <section className='cart-page'>
      <div className='cart-shell'>
        <h1>Your cart</h1>
        <p>
          Add dishes from the menu to build your order. This section is responsive and ready for your cart details.
        </p>
        <div className='cart-message'>
          Your selected items will appear here once the cart flow is connected.
        </div>
      </div>
    </section>
  )
}

export default Cart
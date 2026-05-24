import React, { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const { food_list, cartItems, setCartItems } = useContext(StoreContext)

  const cartEntries = useMemo(() => {
    return food_list.filter((item) => (cartItems[item._id] || 0) > 0)
  }, [food_list, cartItems])

  const subtotal = cartEntries.reduce((total, item) => {
    return total + item.price * (cartItems[item._id] || 0)
  }, 0)

  const deliveryFee = subtotal > 0 ? 8 : 0
  const total = subtotal + deliveryFee

  const updateQuantity = (itemId, delta) => {
    setCartItems((prev) => {
      const currentQty = prev[itemId] || 0
      const nextQty = currentQty + delta

      if (nextQty <= 0) {
        const nextItems = { ...prev }
        delete nextItems[itemId]
        return nextItems
      }

      return {
        ...prev,
        [itemId]: nextQty
      }
    })
  }

  const removeItem = (itemId) => {
    setCartItems((prev) => {
      const nextItems = { ...prev }
      delete nextItems[itemId]
      return nextItems
    })
  }

  return (
    <section className='cart-page'>
      <div className='cart-shell'>
        <div className='cart-header'>
          <div>
            <p className='cart-eyebrow'>Order summary</p>
            <h1>Your cart</h1>
          </div>

          {cartEntries.length > 0 && (
            <span className='cart-count'>{cartEntries.length} item{cartEntries.length > 1 ? 's' : ''}</span>
          )}
        </div>

        {cartEntries.length === 0 ? (
          <div className='cart-empty'>
            <p>Your cart is empty.</p>
            <p>Add dishes from the menu to start your order.</p>
            <Link to='/' className='cart-empty-link'>Browse menu</Link>
          </div>
        ) : (
          <>
            <div className='cart-items'>
              {cartEntries.map((item) => {
                const qty = cartItems[item._id] || 0

                return (
                  <article key={item._id} className='cart-item'>
                    <img src={item.image} alt={item.name} className='cart-item-image' />

                    <div className='cart-item-details'>
                      <div>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                      </div>

                      <div className='cart-item-footer'>
                        <div className='cart-quantity'>
                          <button type='button' onClick={() => updateQuantity(item._id, -1)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                          <span>{qty}</span>
                          <button type='button' onClick={() => updateQuantity(item._id, 1)} aria-label={`Increase ${item.name} quantity`}>+</button>
                        </div>

                        <div className='cart-item-meta'>
                          <span>₹{item.price * qty}</span>
                          <button type='button' className='cart-remove-btn' onClick={() => removeItem(item._id)}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className='cart-summary'>
              <div>
                <span>Subtotal</span>
                <strong>₹{subtotal}</strong>
              </div>
              <div>
                <span>Delivery</span>
                <strong>₹{deliveryFee}</strong>
              </div>
              <div className='cart-summary-total'>
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>

              <div className='cart-summary-actions'>
                <Link to='/' className='cart-outline-btn'>Continue shopping</Link>
                <Link to='/place-order' className='cart-primary-btn'>Place order</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Cart
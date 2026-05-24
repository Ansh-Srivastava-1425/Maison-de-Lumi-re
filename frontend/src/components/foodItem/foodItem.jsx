import React, { useContext, useState } from 'react';
import './foodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ item }) => {
  const { addToCart, decreaseCart, cartItems } = useContext(StoreContext);

  const qty = cartItems[item._id] || 0;
  const [showPopup, setShowPopup] = useState(false);

  const handleAdd = () => {
    addToCart(item._id);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 1200);
  };

  return (
    <article className='food-item'>

      <img src={item.image} alt={item.name} className='food-item-image' />

      <div className='food-item-content'>
        <div>
          <h3 className='food-item-name'>{item.name}</h3>
          <p className='food-item-description'>{item.description}</p>
        </div>

        <div className='food-item-footer'>
          <span className='food-item-price'>₹{item.price}</span>

          {qty === 0 ? (
            <button
              type='button'
              className='food-item-add-btn'
              onClick={handleAdd}
            >
              <img
                src={assets.add_icon_green}
                alt='add'
                className='food-item-add-icon'
              />
              Add
            </button>
          ) : (
            <div className='food-item-counter'>
              <button onClick={() => decreaseCart(item._id)}>−</button>
              <span>{qty}</span>
              <button onClick={handleAdd}>+</button>
            </div>
          )}
        </div>
      </div>

      {/* POPUP MESSAGE */}
      {showPopup && (
        <div className="add-popup">
          Added to cart ✅
        </div>
      )}

    </article>
  );
};

export default FoodItem;
import React from 'react'
import './foodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({ item, onAdd = () => {} }) => {
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

          <button
            type='button'
            className='food-item-add-btn'
            onClick={() => onAdd(item._id)}
            aria-label={`Add ${item.name} to cart`}
          >
            <img src={assets.add_icon_green} alt='' className='food-item-add-icon' />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}

export default FoodItem
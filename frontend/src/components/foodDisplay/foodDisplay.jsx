import React from 'react'
import './foodDisplay.css'
import { food_list } from '../../assets/assets'
import FoodItem from '../foodItem/foodItem'

const FoodDisplay = ({ category = 'All' }) => {
  const filteredItems =
    category === 'All' || !category
      ? food_list
      : food_list.filter((item) => item.category === category)

  return (
    <section className='food-display'>
      <div className='food-display-header'>
        <div>
          <p className='food-display-tag'>Fresh picks</p>
          <h2 className='food-display-title'>Popular dishes</h2>
        </div>

        <p className='food-display-description'>
          Browse chef favorites and discover what’s trending this week.
        </p>
      </div>

      {filteredItems.length > 0 ? (
        <div className='food-display-grid'>
          {filteredItems.map((item) => (
            <FoodItem key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <div className='food-display-empty'>
          <p>No dishes available for this category right now.</p>
        </div>
      )}
    </section>
  )
}

export default FoodDisplay
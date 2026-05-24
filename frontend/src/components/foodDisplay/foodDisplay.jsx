import React, { useContext, useMemo } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItem/foodItem'

const FoodDisplay = ({ category = 'All' }) => {

  const { food_list, searchTerm } = useContext(StoreContext)

  // 🚀 optimized filtering (prevents re-calculation on every render)
  const filteredItems = useMemo(() => {

    let items = food_list || []

    // 1. category filter
    if (category !== 'All') {
      items = items.filter(item => item.category === category)
    }

    // 2. search filter
    if (searchTerm?.trim()) {
      const query = searchTerm.toLowerCase()

      items = items.filter(item =>
        item.name.toLowerCase().includes(query)
      )
    }

    return items

  }, [food_list, category, searchTerm])

  return (
    <section className='food-display' id="explore-menu">

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
          <p>No dishes found 😢</p>
        </div>
      )}

    </section>
  )
}

export default FoodDisplay
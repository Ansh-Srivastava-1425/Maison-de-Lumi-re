import React, { useContext, useMemo, useState } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItem/foodItem'

const FoodDisplay = ({ category = 'All' }) => {

  const { food_list, searchTerm } = useContext(StoreContext)

  // 👇 initially show 12 items
  const [visibleCount, setVisibleCount] = useState(12)

  const filteredItems = useMemo(() => {

    let items = food_list || []

    // Category filter
    if (category !== 'All') {
      items = items.filter(item => item.category === category)
    }

    // Search filter
    if (searchTerm?.trim()) {

      const query = searchTerm.trim().toLowerCase()

      items = items.filter(item =>
        item.name.toLowerCase().includes(query)
      )
    }

    return items

  }, [food_list, category, searchTerm])

  return (

    <section className='food-display' id="food-display">

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

        <>
        
          <div className='food-display-grid'>

            {filteredItems
              .slice(0, visibleCount)
              .map((item) => (

                <FoodItem
                  key={item._id}
                  item={item}
                />

            ))}

          </div>

          {/* 👇 Show More Button */}
          {visibleCount < filteredItems.length && (

            <div className='show-more-container'>

              <button
                className='show-more-btn'
                onClick={() => setVisibleCount(prev => prev + 12)}
              >
                Show More
              </button>

            </div>

          )}

        </>

      ) : (

        <div className='food-display-empty'>
          <p>No dishes found 😢</p>
        </div>

      )}

    </section>

  )
}

export default FoodDisplay
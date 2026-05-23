import ExploreMenu from '../../components/exploremenu/exploreMenu'
import Header from '../../components/header/Header'
import './home.css'
import React, { useState } from 'react'
import FoodDisplay from '../../components/foodDisplay/foodDisplay'

const Home = () => {
  const [category, setCategory] = useState('All')

  return (
    <div className='home-page'>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
    </div>
  )
}

export default Home 
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import AppDownload from './components/appDownload/AppDownload'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/placeOrder'

const App = () => {
  return (
    <div className='app'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
      </Routes>

      <AppDownload />
      <Footer />

    </div>
  )
}

export default App
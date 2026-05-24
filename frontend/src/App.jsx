import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import AppDownload from './components/appDownload/AppDownload'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/placeOrder'
import SignIn from './pages/signIn/signIn'
import SignUp from './pages/signUp/signUp'

const App = () => {
  return (
    <div className='app'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>

      <AppDownload />
      <Footer />

    </div>
  )
}

export default App
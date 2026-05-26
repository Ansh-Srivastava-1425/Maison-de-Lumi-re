import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Navbar = () => {

  const [menu, setMenu] = useState("Home")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const navigate = useNavigate()
  const { cartItems, searchTerm, setSearchTerm, food_list } = useContext(StoreContext)

  const totalItems = Object.values(cartItems).reduce(
    (sum, qty) => sum + qty,
    0
  )

  // // 🔍 fuzzy search
  // const fuzzyMatch = (text, query) => {
  //   text = text.toLowerCase()
  //   query = query.toLowerCase()

  //   let ti = 0
  //   for (let qi = 0; qi < query.length; qi++) {
  //     ti = text.indexOf(query[qi], ti)
  //     if (ti === -1) return false
  //     ti++
  //   }
  //   return true
  // }

  // 💡 suggestions
  const suggestions = searchTerm.trim()
  ? food_list
      .filter(item =>
        item.name.toLowerCase().includes(
          searchTerm.trim().toLowerCase()
        )
      )
      .slice(0, 5)
  : []

  // ⏎ Enter → scroll
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setShowSuggestions(false)

      const el = document.getElementById("explore-menu")
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className='navbar'>

      {/* LOGO */}
      <button
        type='button'
        className='navbar-logo-btn'
        onClick={() => navigate('/')}
      >
        <img className='logo' src={assets.logo} alt="logo" />
      </button>

      {/* MENU */}
      <ul className='navbar-menu'>
        <li className={menu === "Home" ? "active" : ""}>
          <a href="/#home" onClick={() => setMenu("Home")}>Home</a>
        </li>

        <li className={menu === "Menu" ? "active" : ""}>
          <a href="/#explore-menu" onClick={() => setMenu("Menu")}>Menu</a>
        </li>

        <li className={menu === "Mobile-App" ? "active" : ""}>
          <a href="/#mobile-app" onClick={() => setMenu("Mobile-App")}>Mobile App</a>
        </li>

        <li className={menu === "Contact Us" ? "active" : ""}>
          <a href="/#contact-us" onClick={() => setMenu("Contact Us")}>Contact Us</a>
        </li>
      </ul>

      {/* RIGHT SIDE */}
      <div className='navbar-right'>

        {/* 🔍 SEARCH */}
        <div className="search-box">

          <img src={assets.search_icon} alt="search" />

          <input
            type="text"
            placeholder="Search food..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setShowSuggestions(true)
            }}
            onKeyDown={handleSearch}
          />

          {/* 💡 SUGGESTIONS */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((item) => (
                <div
                  key={item._id}
                  className="suggestion-item"
                  onClick={() => {
                    setSearchTerm(item.name)
                    setShowSuggestions(false)

                    document.getElementById("explore-menu")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}

        </div>

        {/* 🛒 CART */}
        <button
          type='button'
          className="navbar-search-icon"
          onClick={() => navigate('/cart')}
        >
          <img src={assets.basket_icon} alt="cart" />

          {totalItems > 0 && (
            <div className="dot">
              {totalItems}
            </div>
          )}
        </button>

        {/* SIGN IN */}
        <button onClick={() => navigate('/sign-in')}>
          Sign in
        </button>

      </div>

    </div>
  )
}

export default Navbar
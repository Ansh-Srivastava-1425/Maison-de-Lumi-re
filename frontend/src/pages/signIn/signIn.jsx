import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signIn.css'

const SignIn = () => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <section className='sign-in-page'>
      <div className='sign-in-card'>
        <h1>Sign in to your account</h1>
        

        <form className='sign-in-form' onSubmit={handleSubmit}>
          <label>
            Email
            <input type='email' placeholder='name@example.com' required />
          </label>

          <label>
            Password
            <input type='password' placeholder='Enter your password' required />
          </label>

          <button type='submit'>Continue</button>
        </form>

        <p className='sign-in-note'>
          Don’t have an account? <Link to='/sign-up' className='sign-in-link'>Create one</Link>
        </p>

        <Link to='/' className='sign-in-back'>Back to home</Link>
      </div>
    </section>
  )
}

export default SignIn

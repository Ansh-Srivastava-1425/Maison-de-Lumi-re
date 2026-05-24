import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../signIn/signIn.css'

const SignUp = () => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <section className='sign-in-page'>
      <div className='sign-in-card'>
        <p className='sign-in-eyebrow'>Create account</p>
        <h1>Create your account</h1>
        
        <form className='sign-in-form' onSubmit={handleSubmit}>
          <label>
            Full name
            <input type='text' placeholder='Your name' required />
          </label>

          <label>
            Email
            <input type='email' placeholder='name@example.com' required />
          </label>

          <label>
            Password
            <input type='password' placeholder='Create a password' required />
          </label>

          <button type='submit'>Create account</button>
        </form>

        <p className='sign-in-note'>
          Already have an account? <Link to='/sign-in' className='sign-in-link'>Sign in</Link>
        </p>

        <Link to='/' className='sign-in-back'>Back to home</Link>
      </div>
    </section>
  )
}

export default SignUp

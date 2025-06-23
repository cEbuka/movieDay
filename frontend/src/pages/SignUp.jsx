import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signup grid place-content-center min-h-screen gap-y-4'>
      <img src=''/>
      <form className='grid gap-y-2'>
        <label >Email</label>
        <input type='text'placeholder='Email' name='email'/>
        <label htmlFor='password'>Password</label>
        <input type='password'placeholder='password' name='password'/>
        <label >Confirm Password</label>
        <input type='password'placeholder='Confirm password' name='email'/>
      </form>
      <Button outLined={true}>Sign Up with Google</Button>
      <Button outLined={true}>Sign Up</Button>
      <p className='text-center'>Already have an account? <Link to='/login'>Log in</Link></p>
    </div>
  )
}

export default SignUp
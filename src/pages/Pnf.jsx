import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img src="/error.png" alt="page not found"/>    
      <h5 className='mt-4'>WE ARE SORRY, IT LOOKS LIKE YOU'RE LOST</h5>
      <p>The page you're looking for is not available</p>
      <Link to={'/'} className='btn btn-dark'>Back to Home</Link>
    </div>
  )
}

export default Pnf

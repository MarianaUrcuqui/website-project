import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-div'>
      <h1 className='home-title'>You got the travel plans, we got the travel cars :</h1>
      <p className='home-paragraph'>Add adventure to your life by joining the #carlife movement. Rent the perfect car to make your perfect road trip.</p>
      <Link to='cars' className='home-link' >Find your car</Link>
    </div>
  )
}

export default Home
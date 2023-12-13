import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <img src='./images/image54.png' alt='van' className='about-img'/>
      <div className='about-div'>
        <div>
          <h1 className='about-title'>Don’t squeeze in a sedan when you could relax in a car.</h1>
          <p className='about-paragraph'>Our mission is to enliven your road trip with the perfect travel car rental. Our cars are recertified before each trip to ensure your travel plans can go off without a hitch. <span className='about-span'>(Hitch costs extra 😉)</span></p>
          <p className='about-paragraph'>Our team is full of carlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className='about-subdiv'>
          <h2 className='about-title'>Your destination is waiting.</h2>
          <h2 className='about-title'>Your car is ready.</h2>
          <Link to='../cars' className='about-link'>Explore our cars</Link>
        </div>
      </div>
    </>
  )
}
export default About
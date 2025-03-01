import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-div container'>
      <h1 className='home-title'>Hey, I'm Mariana Urcuqui</h1>
      <p className='home-paragraph'>And I made this website from scratch to show you my projects and how excited I am to dive into the world of game development</p>
      <Link to='projects' className='home-link' >My work</Link>
    </div>
  )
}

export default Home
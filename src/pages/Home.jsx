import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-div'>
      <h1 className='home-title'>Hey, I'm Mariana Urcuqui</h1>
      <p className='home-paragraph'>A very curious and determined person who</p>
      <Link to='projects' className='home-link' >My work</Link>
    </div>
  )
}

export default Home